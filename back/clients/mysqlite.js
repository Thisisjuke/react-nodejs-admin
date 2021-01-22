const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./db.sqlite"
    }
})

const bookshelf = require('bookshelf')(knex)

export default bookshelf;