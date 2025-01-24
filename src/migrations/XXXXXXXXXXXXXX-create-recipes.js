"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Recipes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            ingredients: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            instructions: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            cookingTime: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            servings: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Recipes");
    },
};
