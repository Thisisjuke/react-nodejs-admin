import {selectAllMessages, getMessageById, countMessages} from "../handlers/messagesHandler";

export default [
    {
        url: '/api/messages',
        handler: selectAllMessages
    },
    {
        url: '/api/messages/:id',
        handler: getMessageById
    },
    {
        url: '/api/count/messages',
        handler: countMessages
    }
]