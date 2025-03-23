const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create a new database or connect to existing one
const db = new sqlite3.Database(path.join(__dirname, "recipes.db"), (err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to SQLite database");
    }
});

// Create the Recipes table if it doesn't exist
db.run(`
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        category TEXT,
        cookingTime INTEGER,
        servings INTEGER,
        imageUrl TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = db;
