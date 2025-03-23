const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

// Create or open the database
const db = new sqlite3.Database("recipes.db");

// Read the SQL file
const sql = fs.readFileSync(path.join(__dirname, "../db/seed.sql"), "utf8");

// Execute the SQL
db.exec(sql, (err) => {
    if (err) {
        console.error("Error executing SQL:", err);
    } else {
        console.log("Database seeded successfully!");
    }

    // Close the database connection
    db.close();
});
