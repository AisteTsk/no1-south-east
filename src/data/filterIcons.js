const dealTypeIcons = [
    {icon: ["fas", "utensils"], filterType: 'discountOnFood', id: 'deal1'},
    {icon: ["fas", "glass-cheers"], filterType: 'discountOnDrinks', id: 'deal2'}
];

const dietaryIcons = [
    {iconInactive: 'vegetarian_inactive.png', iconActive: 'vegetarian_active.png', filterType: 'dietary_vegetarian', id: 'diet1'},
    {iconInactive: 'vegan_inactive.png', iconActive: 'vegan_active.png', filterType: 'dietary_vegan', id: 'diet2'},
    {iconInactive: 'halal_inactive.png', iconActive: 'halal_active.png', filterType: 'dietary_halal', id: 'diet3'},
    {iconInactive: 'gluten_free_inactive.png', iconActive: 'gluten_free_active.png', filterType: 'dietary_gluten', id: 'diet4'},
    {iconInactive: 'dairy_free_inactive.png', iconActive: 'dairy_free_active.png', filterType: 'dietary_dairy', id: 'diet5'}
];

const mealTimeIcons = [
    {text: 'Breakfast', iconInactive: 'breakfast_inactive.png', iconActive: 'breakfast_active.png', filterType: 'meal_breakfast', id: 'time1'},
    {text: 'Lunch', iconInactive: 'lunch_inactive.png', iconActive: 'lunch_active.png', filterType: 'meal_lunch', id: 'time2'},
    {text: 'Dinner', iconInactive: 'dinner_inactive.png', iconActive: 'dinner_active.png', filterType: 'meal_dinner', id: 'time3'}
];

export {dealTypeIcons, mealTimeIcons, dietaryIcons};