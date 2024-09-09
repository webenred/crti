/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "sanctum.csrf-cookie": [],
    "telescope": [
        {
            "name": "view",
            "required": false
        }
    ],
    "app": [],
    "search.user": [],
    "search.project": [],
    "search.resource": [],
    "manage.index": [],
    "manage.permission.index": [],
    "manage.permission.create": [],
    "manage.permission.store": [],
    "manage.permission.show": [
        {
            "name": "permission",
            "required": true
        }
    ],
    "manage.permission.edit": [
        {
            "name": "permission",
            "required": true
        }
    ],
    "manage.permission.update": [
        {
            "name": "permission",
            "required": true
        }
    ],
    "manage.permission.destroy": [
        {
            "name": "permission",
            "required": true
        }
    ],
    "manage.role.index": [],
    "manage.role.create": [],
    "manage.role.store": [],
    "manage.role.show": [
        {
            "name": "role",
            "required": true
        }
    ],
    "manage.role.edit": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.update": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.destroy": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.index": [],
    "manage.unit.create": [],
    "manage.unit.store": [],
    "manage.unit.show": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.edit": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.update": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.destroy": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.create": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.store": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.show": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.edit": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.update": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.destroy": [
        {
            "name": "unit",
            "required": true
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.user.index": [],
    "manage.user.create": [],
    "manage.user.store": [],
    "manage.user.show": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.edit": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.update": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.destroy": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.board.index": [],
    "manage.board.create": [],
    "manage.board.store": [],
    "manage.board.show": [
        {
            "name": "board",
            "required": true,
            "binding": "code"
        }
    ],
    "manage.board.edit": [
        {
            "name": "board",
            "required": true,
            "binding": "code"
        }
    ],
    "manage.board.update": [
        {
            "name": "board",
            "required": true,
            "binding": "code"
        }
    ],
    "manage.board.destroy": [
        {
            "name": "board",
            "required": true,
            "binding": "code"
        }
    ],
    "manage.resource.index": [],
    "manage.resource.create": [],
    "manage.resource.store": [],
    "manage.resource.show": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.edit": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.update": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.destroy": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.project.index": [],
    "manage.project.show": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.suggest.nature": [],
    "project.suggest.domain": [],
    "project.index": [],
    "project.store": [],
    "project.show": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.version.duplicate": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        }
    ],
    "project.version.sync": [
        {
            "name": "project",
            "required": true
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "project.version.accept": [
        {
            "name": "project",
            "required": true
        },
        {
            "name": "version",
            "required": true
        }
    ],
    "project.version.reject": [
        {
            "name": "project",
            "required": true
        },
        {
            "name": "version",
            "required": true
        }
    ],
    "project.version.create": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.version.store": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.version.edit": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "project.version.update": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "board.comment.store": [
        {
            "name": "board",
            "required": true,
            "binding": "code"
        }
    ],
    "board.accept": [
        {
            "name": "board",
            "required": true
        }
    ],
    "board.reject": [
        {
            "name": "board",
            "required": true
        }
    ],
    "board.index": [],
    "board.show": [
        {
            "name": "board",
            "required": true
        }
    ],
    "workspace.index": [],
    "workspace.project": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        }
    ],
    "workspace.kanban": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        }
    ],
    "workspace.suggested.version.index": [
        {
            "name": "project",
            "required": true
        }
    ],
    "workspace.suggested.version.show": [
        {
            "name": "project",
            "required": true
        },
        {
            "name": "version",
            "required": true
        }
    ],
    "check.user": [],
    "register.create": [],
    "register.store": [],
    "register.created": [],
    "login.create": [],
    "login.store": [],
    "logout.destroy": []
}
}
export {};
