/* 
    Where all of our database function code will reside to be exported and sent to controller.js
*/

const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

let db;

async function makeConnection() {
    db = await sqlite.open({
        filename: 'gameLogs.db',
        driver: sqlite3.Database
    })
}

module.exports = { makeConnection };