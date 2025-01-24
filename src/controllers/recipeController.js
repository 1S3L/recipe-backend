const Recipe = require("../models/recipe");

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json({
            success: true,
            data: recipe,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.status(200).json({
            success: true,
            data: recipes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Get single recipe
exports.getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                error: "Recipe not found",
            });
        }
        res.status(200).json({
            success: true,
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Update recipe
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                error: "Recipe not found",
            });
        }
        await recipe.update(req.body);
        res.status(200).json({
            success: true,
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                error: "Recipe not found",
            });
        }
        await recipe.destroy();
        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
