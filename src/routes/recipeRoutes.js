const express = require("express");
const router = express.Router();
const db = require("../db/database");

// Get all recipes
router.get("/", (req, res) => {
    db.all("SELECT * FROM recipes", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Parse JSON strings into objects
        const recipes = rows.map((row) => ({
            ...row,
            ingredients: JSON.parse(row.ingredients),
            steps: JSON.parse(row.steps),
        }));
        res.json(recipes);
    });
});

// Get a single recipe
router.get("/:id", (req, res) => {
    db.get("SELECT * FROM recipes WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: "Recipe not found" });
            return;
        }
        // Parse JSON strings into objects
        const recipe = {
            ...row,
            ingredients: JSON.parse(row.ingredients),
            steps: JSON.parse(row.steps),
        };
        res.json(recipe);
    });
});

// Create a new recipe
router.post("/", (req, res) => {
    const { name, description, ingredients, steps } = req.body;

    db.run(
        `INSERT INTO recipes (name, description, ingredients, steps)
         VALUES (?, ?, ?, ?)`,
        [name, description, JSON.stringify(ingredients), JSON.stringify(steps)],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                id: this.lastID,
                message: "Recipe created successfully",
            });
        }
    );
});

// Update a recipe
router.put("/:id", (req, res) => {
    const { name, description, ingredients, steps } = req.body;

    db.run(
        `UPDATE recipes 
         SET name = ?, description = ?, ingredients = ?, steps = ?
         WHERE id = ?`,
        [name, description, JSON.stringify(ingredients), JSON.stringify(steps), req.params.id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (this.changes === 0) {
                res.status(404).json({ error: "Recipe not found" });
                return;
            }
            res.json({ message: "Recipe updated successfully" });
        }
    );
});

// Delete a recipe
router.delete("/:id", (req, res) => {
    db.run("DELETE FROM recipes WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: "Recipe not found" });
            return;
        }
        res.json({ message: "Recipe deleted successfully" });
    });
});

module.exports = router;
