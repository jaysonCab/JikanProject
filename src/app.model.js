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


// await db.exec(`
//     CREATE TABLE IF NOT EXISTS games (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         title TEXT NOT NULL,
//         personal_rating INTEGER NOT NULL,
//         image TEXT NOT NULL,
//         opinion TEXT,
//         number_times_played INTEGER NOT NULL,
//         first_played DATE NOT NULL,
//         total_hours INTEGER,
//         favourite INTEGER NOT NULL DEFAULT 0
//     )
// `);