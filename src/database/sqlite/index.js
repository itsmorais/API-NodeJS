// Drive que irei utilizar
const sqlite3 = require('sqlite3')
// Biblioteca que permite conexão, cursor etc...
const sqlite = require('sqlite')
// Path = biblioteca nativa do node
const path = require('path')

async function sqliteConnection() {
  const database = await sqlite.open({
    // __dirname = diretório atual
    filename: path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database
  })
  return database
}

module.exports = sqliteConnection
