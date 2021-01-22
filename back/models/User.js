import {Message} from "./Message";

const bookshelf = require("../clients/mysqlite");

export const User = bookshelf.default.Model.extend({
    tableName: 'users'
})