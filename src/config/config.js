const dotenv = require("dotenv");
const path = require("path");

// Load env vars from root .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    test: {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
