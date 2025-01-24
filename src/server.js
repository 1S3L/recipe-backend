require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const recipeRoutes = require("./routes/recipeRoutes");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// Recipe routes
app.use("/api/recipes", recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Handle 404
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Set port and start server
const PORT = process.env.PORT || 3000;

// Database connection and server start
sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });
