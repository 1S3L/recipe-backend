const axios = require("axios");

const recipes = [
    {
        name: "Spaghetti Carbonara",
        description:
            "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's a creamy and delicious dish that is simple to make and perfect for a quick dinner.",
        ingredients: [
            { name: "Spaghetti", amount: 200, unit: "grams" },
            { name: "Bacon", amount: 150, unit: "grams" },
            { name: "Eggs", amount: 2, unit: "large" },
            { name: "Parmesan cheese", amount: 50, unit: "grams" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Black pepper", amount: 1, unit: "teaspoon" },
            { name: "Olive oil", amount: 1, unit: "tablespoon" },
        ],
        steps: [
            "Cook spaghetti according to package instructions.",
            "Fry the bacon in olive oil until crispy.",
            "Add minced garlic to the bacon and sauté for 1-2 minutes.",
            "In a bowl, whisk eggs and grated Parmesan cheese.",
            "Drain spaghetti and combine with bacon and garlic.",
            "Remove from heat and quickly mix in the egg and cheese mixture.",
            "Season with black pepper and serve.",
        ],
    },
    {
        name: "Chicken Curry",
        description:
            "A flavorful and aromatic dish featuring tender chicken pieces simmered in a rich curry sauce. This recipe is perfect for those who love a bit of spice and warmth in their meals.",
        ingredients: [
            { name: "Chicken breast", amount: 500, unit: "grams" },
            { name: "Onion", amount: 1, unit: "large" },
            { name: "Garlic", amount: 3, unit: "cloves" },
            { name: "Ginger", amount: 1, unit: "teaspoon" },
            { name: "Tomato", amount: 200, unit: "grams" },
            { name: "Coconut milk", amount: 400, unit: "ml" },
            { name: "Curry powder", amount: 2, unit: "tablespoon" },
            { name: "Olive oil", amount: 1, unit: "tablespoon" },
        ],
        steps: [
            "Heat olive oil in a pot and sauté chopped onion until golden.",
            "Add minced garlic and ginger, cook for 1-2 minutes.",
            "Add cubed chicken breast and cook until no longer pink.",
            "Stir in curry powder and cook for another minute.",
            "Add chopped tomato and cook until softened.",
            "Pour in coconut milk and simmer for 20 minutes.",
            "Season with salt and serve with rice.",
        ],
    },
    {
        name: "Vegetable Stir-Fry",
        description:
            "A quick and healthy dish that combines fresh vegetables with a savory soy sauce. This stir-fry is a great way to enjoy a variety of veggies in one meal.",
        ingredients: [
            { name: "Broccoli", amount: 200, unit: "grams" },
            { name: "Carrot", amount: 1, unit: "large" },
            { name: "Bell pepper", amount: 1, unit: "large" },
            { name: "Snap peas", amount: 100, unit: "grams" },
            { name: "Soy sauce", amount: 3, unit: "tablespoon" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Ginger", amount: 1, unit: "teaspoon" },
            { name: "Olive oil", amount: 1, unit: "tablespoon" },
        ],
        steps: [
            "Heat olive oil in a large pan or wok.",
            "Add minced garlic and ginger, sauté for 1-2 minutes.",
            "Add sliced carrot and cook for 2-3 minutes.",
            "Add broccoli and bell pepper, cook for another 3-4 minutes.",
            "Add snap peas and cook for an additional 2 minutes.",
            "Pour in soy sauce and stir to coat vegetables evenly.",
            "Serve hot over rice or noodles.",
        ],
    },
    {
        name: "Chocolate Chip Cookies",
        description:
            "These classic chocolate chip cookies are crispy on the outside and chewy on the inside. Perfect for a sweet treat or dessert.",
        ingredients: [
            { name: "Butter", amount: 200, unit: "grams" },
            { name: "Sugar", amount: 150, unit: "grams" },
            { name: "Brown sugar", amount: 150, unit: "grams" },
            { name: "Eggs", amount: 2, unit: "large" },
            { name: "Vanilla extract", amount: 1, unit: "teaspoon" },
            { name: "Flour", amount: 300, unit: "grams" },
            { name: "Baking soda", amount: 1, unit: "teaspoon" },
            { name: "Salt", amount: 1, unit: "teaspoon" },
            { name: "Chocolate chips", amount: 200, unit: "grams" },
        ],
        steps: [
            "Preheat oven to 180°C (350°F).",
            "Cream together butter, sugar, and brown sugar until smooth.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Combine flour, baking soda, and salt; gradually add to the creamed mixture.",
            "Fold in chocolate chips.",
            "Drop by rounded spoonfuls onto ungreased baking sheets.",
            "Bake for 10-12 minutes, or until edges are nicely browned.",
        ],
    },
    {
        name: "Caesar Salad",
        description:
            "A fresh and crunchy Caesar salad made with crisp romaine lettuce, Parmesan cheese, and croutons, all tossed in a creamy Caesar dressing.",
        ingredients: [
            { name: "Romaine lettuce", amount: 200, unit: "grams" },
            { name: "Parmesan cheese", amount: 50, unit: "grams" },
            { name: "Croutons", amount: 100, unit: "grams" },
            { name: "Caesar dressing", amount: 100, unit: "ml" },
            { name: "Garlic", amount: 1, unit: "clove" },
            { name: "Olive oil", amount: 1, unit: "tablespoon" },
            { name: "Lemon juice", amount: 1, unit: "tablespoon" },
        ],
        steps: [
            "Chop romaine lettuce and place in a large bowl.",
            "Add grated Parmesan cheese and croutons.",
            "In a small bowl, mix Caesar dressing, minced garlic, olive oil, and lemon juice.",
            "Pour dressing over the salad and toss to combine.",
            "Serve immediately.",
        ],
    },
];

async function seedRecipes() {
    try {
        for (const recipe of recipes) {
            const response = await axios.post("http://localhost:3901/api/recipes", recipe);
            console.log(`Added recipe: ${recipe.name}`);
        }
        console.log("All recipes have been added successfully!");
    } catch (error) {
        console.error("Error seeding recipes:", error.message);
    }
}

// Run the seeding function
seedRecipes();
