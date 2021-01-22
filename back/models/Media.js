const bookshelf = require("../clients/mysqlite");

export const Media = bookshelf.default.Model.extend({
    tableName: 'media',
})