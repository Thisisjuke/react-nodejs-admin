import {selectAllMessages, getMessageById} from "../handlers/messagesHandler";

export default [
    {
        url: '/api/messages',
        handler: selectAllMessages
    },
    {
        url: '/api/messages/:id',
        handler: getMessageById
    }
]