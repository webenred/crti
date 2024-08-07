import * as React from "react";
import * as TanstackTable from "@tanstack/react-table";
import { assert } from "@/Utils/helper";

export type EditModeState = Record<string, boolean>;
export type SetDataState = React.Dispatch<React.SetStateAction<any[]>>;

export interface EditModeTableState {
    editMode: EditModeState;
}

export interface EditModeOptions<TData extends TanstackTable.RowData> {
    enableEditMode?: boolean | ((row: TanstackTable.Row<TData>) => boolean);
    onEditModeChange?: TanstackTable.OnChangeFn<EditModeState>;
    setData?: (updateFn: React.SetStateAction<TData[]>) => void;
}

export interface EditModeInstance<TData extends TanstackTable.RowData> {
    getEditModeRowModel: () => TanstackTable.RowModel<TData>;
    resetEditMode: (defaultState?: boolean) => void;
    setRowOnEditMode: (updater: TanstackTable.Updater<EditModeState>) => void;
    addRow: (row: TData) => void;
    updateData: (rowIdx: number, columnIdx: keyof TData, value: any) => void;
    removeRows: (...rowIdx: number[]) => void;
}

export interface EditModeRow {
    getCanEdit: () => boolean;
    getIsOnEditMode: () => boolean;
    toggleEditMode: (value: boolean) => void;
    removeRow: () => void;
}

declare module "@tanstack/react-table" {
    interface TableState extends EditModeTableState { }
    //merge our new feature's options with the existing table options
    interface TableOptionsResolved<TData extends TanstackTable.RowData> extends EditModeOptions<TData> { }
    //merge our new feature's instance APIs with the existing table instance APIs
    interface Table<TData extends TanstackTable.RowData> extends EditModeInstance<TData> { }
    // if you need to add cell instance APIs...
    // interface Cell<TData extends RowData, TValue> extends DensityCell
    // if you need to add row instance APIs...
    interface Row<TData extends TanstackTable.RowData> extends EditModeRow { }
    // if you need to add column instance APIs...
    // interface Column<TData extends RowData, TValue> extends DensityColumn
    // if you need to add header instance APIs...
    // interface Header<TData extends RowData, TValue> extends DensityHeader
    // Note: declaration merging on `ColumnDef` is not possible because it is a type, not an interface.
    // But you can still use declaration merging on `ColumnDef.meta`
}

export const EditMode: TanstackTable.TableFeature<any> = {

    getInitialState: (state): EditModeTableState => {
        return {
            editMode: {},
            ...state,
        }
    },
    getDefaultOptions: <TData extends TanstackTable.RowData>(table: TanstackTable.Table<TData>): EditModeOptions<TData> => {
        return {
            enableEditMode: false,
            onEditModeChange: TanstackTable.makeStateUpdater("editMode", table),
        }
    },
    createTable: <TData extends TanstackTable.RowData>(table: TanstackTable.Table<TData>): void => {
        const { setData } = table.options;

        table.getEditModeRowModel = () => editModeRowsFn(table, table.getRowModel())
        table.setRowOnEditMode = updater => table.options.onEditModeChange?.(updater)
        table.resetEditMode = defaultState => table.setRowOnEditMode(defaultState ? {} : table.initialState.editMode ?? {})
        table.addRow = (row) => {
            if (!setData) {
                throw new Error("you must pass a setData to table options");
            }

            setData((old) => {
                return [...old, row]
            })
        };
        table.updateData = (rowIdx, columnIdx, value) => {
            if (!setData) {
                throw new Error("you must pass setData function to table options")
            }

            setData((data) => {
                data[rowIdx][columnIdx] = value;
                return [...data];
            })
        };
        table.removeRows = (...rowIdx: number[]) => {
            if (!setData) {
                throw new Error("you must pass setData function to table options")
            }

            setData((data) => data.filter((_, idx) => !rowIdx.includes(idx)))
        };

    },
    createRow: <TData extends TanstackTable.RowData>(row: TanstackTable.Row<TData>, table: TanstackTable.Table<TData>): void => {
        const { setData } = table.options;

        row.toggleEditMode = (value) => {
            const isOnEditMode = row.getIsOnEditMode();

            table.setRowOnEditMode(old => {
                value = typeof value !== "undefined" ? value : !isOnEditMode;

                if (row.getCanEdit() && isOnEditMode === value) {
                    return old;
                }

                const onEditModeIds = { ...old };

                mutateRowIsOnEditMode(onEditModeIds, row.id, value, table);

                return onEditModeIds;
            })
        };

        row.getIsOnEditMode = () => {
            const { editMode } = table.getState();
            return isRowOnEditMode(row, editMode);
        };

        row.getCanEdit = () => {
            if (typeof table.options.enableEditMode === 'function') {
                return table.options.enableEditMode(row);
            }
            return table.options.enableEditMode ?? true;
        };

        row.removeRow = () => {
            if (!setData) {
                throw new Error("you must pass a setData to table options");
            }

            setData((old) => {
                old.splice(row.index, 1);
                return [...old]
            })
        }
    }


}

const mutateRowIsOnEditMode = <TData extends TanstackTable.RowData>(onEditModeIds: Record<string, boolean>, id: string, value: boolean, table: TanstackTable.Table<TData>) => {
    const row = table.getRow(id, true);

    if (value && row.getCanEdit()) {
        onEditModeIds[id] = true;
    } else {
        delete onEditModeIds[id];
    }
}

export function editModeRowsFn<TData extends TanstackTable.RowData>(table: TanstackTable.Table<TData>, rowModel: TanstackTable.RowModel<TData>): TanstackTable.RowModel<TData> {
    const editMode = table.getState().editMode;

    const newEditModeFlatRows: TanstackTable.Row<TData>[] = [];
    const newEditModeRowsById: Record<string, TanstackTable.Row<TData>> = {};

    const recurseRows = (rows: TanstackTable.Row<TData>[], depth = 0): TanstackTable.Row<TData>[] => {
        return rows.map((row) => {
            const isOnEditMode = isRowOnEditMode(row, editMode);

            if (isOnEditMode) {
                newEditModeFlatRows.push(row);
                newEditModeRowsById[row.id] = row;
            }

            if (row.subRows?.length) {
                row = {
                    ...row, subRows: recurseRows(row.subRows, depth + 1),
                }
            }

            if (isOnEditMode) {
                return row;
            }
        }).filter(Boolean) as TanstackTable.Row<TData>[];
    }

    return {
        rows: recurseRows(rowModel.rows),
        flatRows: newEditModeFlatRows,
        rowsById: newEditModeRowsById,
    }
}

export function isRowOnEditMode<TData extends TanstackTable.RowData>(row: TanstackTable.Row<TData>, editMode: Record<string, boolean>): boolean {
    return editMode[row.id] ?? false;
}