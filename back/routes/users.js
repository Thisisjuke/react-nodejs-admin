import {selectAllUsers, getUserById} from "../handlers/usersHandler";

export default [
    {
        url: '/api/users',
        handler: selectAllUsers
    },
    {
        url: '/api/users/:id',
        handler: getUserById
    }
]