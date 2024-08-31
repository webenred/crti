import React from "react";
import {
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { TableWrapper } from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import DataTable from "@/Components/common/data-table";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Button } from "@/Components/ui/button";
import { User } from "@/types";
import { columnDef } from "./Columns";
import { Search } from "lucide-react";

const Table: React.FC<{ users: User[] }> = ({ users }) => {
    const finalData = React.useMemo(() => users, [users]);
    const finalColumnDef = React.useMemo(() => columnDef, []);

    const table = useReactTable({
        columns: finalColumnDef,
        data: finalData ?? [],
        getCoreRowModel: getCoreRowModel(),
        getRowId: (row) => row.uuid,
        getExpandedRowModel: getExpandedRowModel(),
    });

    return (
        <TableWrapper>
            <div className="p-4 flex justify-between gap-2">
                <div className="relative sm:w-80">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <Input placeholder="Search" className="pl-10" />
                </div>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost">
                                        </Button>
                                    </DropdownMenuTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    visibilité des colonnes
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <DropdownMenuContent
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                            loop
                            className="w-40"
                        >
                            {table
                                .getAllColumns()
                                .filter((col) => col.getCanHide())
                                .map((col) => {
                                    const title =
                                        typeof col.columnDef.header === "string"
                                            ? col.columnDef.header
                                            : col.id;
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={col.id}
                                            checked={col.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                col.toggleVisibility(!!value)
                                            }
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            {title}
                                        </DropdownMenuCheckboxItem>
                                    );
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <DataTable
                options={{
                    table,
                }}
            />
        </TableWrapper>
    );
};

export default Table;
