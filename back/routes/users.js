import {selectAllUsers, getUserById, getUserMedias, getUserMessages, disableUser, enableUser} from "../handlers/usersHandler";

export default [
    {
        url: '/api/users',
        handler: selectAllUsers
    },
    {
        url: '/api/users/:id',
        handler: getUserById
    },
    {
        url: '/api/users/:id/disable',
        handler: disableUser
    },
    {
        url: '/api/users/:id/enable',
        handler: enableUser
    },
    {
        url: '/api/users/:id/messages',
        handler: getUserMessages
    },
    {
        url: '/api/users/:id/media',
        handler: getUserMedias
    }
]