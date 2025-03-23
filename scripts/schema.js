const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

// Create or open the database
// Create database directory if it doesn't exist
const dbDir = path.join(__dirname, "../src/db");
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true, mode: 0o755 });
}

// Ensure we have write permissions on the database file
const dbPath = path.join(dbDir, "recipes.db");
if (fs.existsSync(dbPath)) {
    fs.chmodSync(dbPath, 0o755);
}

const db = new sqlite3.Database(dbPath);

// SQL to create tables
const schema = `
CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL
)

`;

// Execute the schema
db.exec(schema, (err) => {
    if (err) {
        console.error("Error creating schema:", err);
    } else {
        console.log("Schema created successfully!");
    }

    // Close the database connection
    db.close();
});
