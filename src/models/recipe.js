const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Recipe = sequelize.define("Recipe", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cookingTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Recipe;
