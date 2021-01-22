import {User} from "./User";

const bookshelf = require("../clients/mysqlite");

export const Message = bookshelf.default.Model.extend({
    tableName: 'messages',
    receiverId: function() {
        return this.belongsTo(User)
    },
    senderId: function() {
        return this.belongsTo(User)
    }
})