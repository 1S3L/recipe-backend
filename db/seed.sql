-- Clear existing data
DELETE FROM recipes;

-- Reset auto-increment counter
DELETE FROM sqlite_sequence WHERE name = 'recipes';

-- Spaghetti Carbonara
INSERT INTO recipes (name, description, ingredients, steps) VALUES (
  'Spaghetti Carbonara',
  'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It''s a creamy and delicious dish that is simple to make and perfect for a quick dinner.',
  '[
    {"name": "Spaghetti", "amount": 200, "unit": "grams"},
    {"name": "Bacon", "amount": 150, "unit": "grams"},
    {"name": "Eggs", "amount": 2, "unit": "large"},
    {"name": "Parmesan cheese", "amount": 50, "unit": "grams"},
    {"name": "Garlic", "amount": 2, "unit": "cloves"},
    {"name": "Black pepper", "amount": 1, "unit": "teaspoon"},
    {"name": "Olive oil", "amount": 1, "unit": "tablespoon"}
  ]',
  '[
    "Cook spaghetti according to package instructions.",
    "Fry the bacon in olive oil until crispy.",
    "Add minced garlic to the bacon and sauté for 1-2 minutes.",
    "In a bowl, whisk eggs and grated Parmesan cheese.",
    "Drain spaghetti and combine with bacon and garlic.",
    "Remove from heat and quickly mix in the egg and cheese mixture.",
    "Season with black pepper and serve."
  ]'
);

-- Chicken Curry
INSERT INTO recipes (name, description, ingredients, steps) VALUES (
  'Chicken Curry',
  'A flavorful and aromatic dish featuring tender chicken pieces simmered in a rich curry sauce. This recipe is perfect for those who love a bit of spice and warmth in their meals.',
  '[
    {"name": "Chicken breast", "amount": 500, "unit": "grams"},
    {"name": "Onion", "amount": 1, "unit": "large"},
    {"name": "Garlic", "amount": 3, "unit": "cloves"},
    {"name": "Ginger", "amount": 1, "unit": "teaspoon"},
    {"name": "Tomato", "amount": 200, "unit": "grams"},
    {"name": "Coconut milk", "amount": 400, "unit": "ml"},
    {"name": "Curry powder", "amount": 2, "unit": "tablespoons"},
    {"name": "Olive oil", "amount": 1, "unit": "tablespoon"}
  ]',
  '[
    "Heat olive oil in a pot and sauté chopped onion until golden.",
    "Add minced garlic and ginger, cook for 1-2 minutes.",
    "Add cubed chicken breast and cook until no longer pink.",
    "Stir in curry powder and cook for another minute.",
    "Add chopped tomato and cook until softened.",
    "Pour in coconut milk and simmer for 20 minutes.",
    "Season with salt and serve with rice."
  ]'
);

-- Continue with remaining recipes... 