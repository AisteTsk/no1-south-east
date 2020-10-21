const dealTypeIcons = [
    {icon: ["fas", "utensils"], id: 'deal1'},
    {icon: ["fas", "glass-cheers"], id: 'deal2'}
];

const dietaryIcons = [
    {iconInactive: 'vegetarian_inactive.png', iconActive: 'vegetarian_active.png', id: 'diet1'},
    {iconInactive: 'vegan_inactive.png', iconActive: 'vegan_active.png', id: 'diet2'},
    {iconInactive: 'halal_inactive.png', iconActive: 'halal_active.png', id: 'diet3'},
    {iconInactive: 'gluten_free_inactive.png', iconActive: 'gluten_free_active.png', id: 'diet4'},
    {iconInactive: 'dairy_free_inactive.png', iconActive: 'dairy_free_active.png', id: 'diet5'}
];

const mealTimeIcons = [
    {text: 'Breakfast', iconInactive: 'breakfast_inactive.png', iconActive: 'breakfast_active.png', id: 'time1'},
    {text: 'Lunch', iconInactive: 'lunch_inactive.png', iconActive: 'lunch_active.png', id: 'time2'},
    {text: 'Dinner', iconInactive: 'dinner_inactive.png', iconActive: 'dinner_active.png', id: 'time3'}
];

export {dealTypeIcons, mealTimeIcons, dietaryIcons};