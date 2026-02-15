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

async function addGame(title, personal_rating, image, opinion, number_times_played, first_played, total_hours, favourite) {
    
    const favouriteValue = favourite ? 1 : 0;

    await db.run(`
        INSERT INTO games (title, personal_rating, image, opinion, number_times_played, first_played, total_hours, favourite)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [title, personal_rating, image, opinion, number_times_played, first_played, total_hours, favouriteValue]);

}

async function displayAllRecords() {
    const results = await db.all("SELECT * FROM games");
    return results;
}

module.exports = { makeConnection, displayAllRecords, addGame };

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