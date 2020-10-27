const restaurants = [
    {
        "restaurantId": 1,
        'name': `Ollie's Oysterhouse`,
        'offerPercent': '30%',
        'offerDescription': ``,
        'validUntil': '31 Oct',
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': false,
        'happyHour': false,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
        'maximumTableSize': 4,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°28'27.6"N 0°02'38.7"E`,
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['tapas', 'mediterranean'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    
    {
        'restaurantId': 2,
        'name': `Billy Big Burgers`,
        'offerPercent': '15%',
        'offerDescription': ``,
        'validUntil': '31 Oct',
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        'maximumTableSize': 4,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°28'27.6"N 0°02'40.7"E`,
        'sitting': {'breakfast': false, 'lunch': true, 'dinner': true},
        'cuisine': 'american',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },

    {
        "restaurantId": 3,
        'name': `The big Crab`,
        'offerPercent': '25%',
        'offerDescription': ``,
        'validUntil': '31 Apr',
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
        'maximumTableSize': 2,
        'location': `51°28'27.6"N 0°02'38.7"E`,
        'dietaryRequirements':  {'vegetarian': true, 'vegan': true, 'halal': true, 'glutenfree': true, 'dairyfree': false},
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine' : 'seafood',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
        
    },
    
    {
        "restaurantId": 4,
        'name': `The Friendly Shark`,
        'offerPercent': '25%',
        'validUntil': '31 Mar',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        'maximumTableSize': 6,
        'location': `51°27'10"N 0°13'50"W`,
        'dietaryRequirements':  {'vegetarian': true, 'vegan': true, 'halal': true, 'glutenfree': false, 'dairyfree': true},
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['chinese', 'japanese'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    
    {
        "restaurantId": 5,
        'name': `Caddy Shack`,
        'offerPercent': '80%',
        'validUntil': '31 May',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday','sunday'],
        'maximumTableSize': 6,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°27'10"N 0°13'20"W`,
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['mexican', 'spanish'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    {
        "restaurantId": 6,
        'name': `The Lovely Wolf`,
        'offerPercent': '15%',
        'validUntil': '31 Sep',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
        'maximumTableSize': 4,
        'location': `51°27'12"N 0°11'20"W`,
        'dietaryRequirements': {'vegetarian': true, 'vegan': true, 'halal': true, 'glutenfree': true, 'dairyfree': true}, 
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['italian', 'spanish'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    {
        'restaurantId': 7,
        'name': `Thai Delight`,
        'offerPercent': '10%',
        'validUntil': '31 Aug',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': true,
        'happyHour': false,
        'daysAvailable': ['wednesday', 'thursday','sunday'],
        'maximumTableSize': 6,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°28'9.3"N 0°11'20"W`,
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': 'Thai',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    
    {
        "restaurantId": 8,
        'name': `Krusty Krab`,
        'offerPercent': '10%',
        'validUntil': '31 Nov',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday','sunday'],
        'maximumTableSize': 6,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°28'9.3"N 0°12'05"W`,
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['Mexican', 'American'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },


    {
        "restaurantId": 9,
        'name': `The Burger Experience`,
        'offerPercent': '80%',
        'validUntil': '31 Jun',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': false,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday','saturday'],
        'maximumTableSize': 6,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°28'9.3"N 0°15'05"W`,
        'sitting': {'breakfast': false, 'lunch': true, 'dinner': true},
        'cuisine': ['Mexican', 'American'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },

    {
        "restaurantId": 10,
        'name': `Pizza Palace`,
        'offerPercent': '20%',
        'validUntil': '31 Oct',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['wednesday', 'thursday','friday', 'saturday', 'sunday'],
        'maximumTableSize': 5,
        'dietaryRequirements': ['halal', 'vegan', 'vegetarian'], 
        'location': `51°24'9.3"N 0°15'11"W`,
        'sitting': {'breakfast': false, 'lunch': true, 'dinner': true},
        'cuisine': ['spanish', 'italian'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },

    {
        "restaurantId": 11,
        'name': `In my Grill`,
        'offerPercent': '5%',
        'validUntil': '31 Oct',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': false,
        'happyHour': false,
        'daysAvailable': ['friday', 'saturday', 'sunday'],
        'maximumTableSize': 5,
        'location': `51°24'9.3"N 0°06'11"W`,
        'dietaryRequirements':  {'vegetarian': true, 'vegan': true, 'halal': true, 'glutenfree': false, 'dairyfree': false},
        'sitting': {'breakfast': false, 'lunch': false, 'dinner': true},
        'cuisine': 'italian',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    
    {
        "restaurantId": 12 ,
        'name': `Dad Bod Incoming`,
        'offerPercent': '15%',
        'validUntil': '31 Jul',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        'maximumTableSize': 2,
        'location': `51°27'9.3"N 0°06'11"W`,
        'dietaryRequirements':  {'vegetarian': true, 'vegan': false, 'halal': false, 'glutenfree': true, 'dairyfree': true},
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['american', 'british'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    {
        "restaurantId": 13,
        'name': `Peters Piella`,
        'offerPercent': '15%',
        'validUntil': '31 Mar',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': false,
        'discountOnDrinks': true,
        'happyHour': true,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
        'maximumTableSize': 4,
        'location': `51°29'10"N 0°06'12.1"W`,
        'dietaryRequirements': {'vegetarian': true, 'vegan': true, 'halal': true, 'glutenfree': true, 'dairyfree': false},
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': 'spanish',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    
    {
        "restaurantId": 14,
        'name': `Crumbs & Cookies`,
        'offerPercent': '10%',
        'validUntil': '31 Dec',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': false,
        'happyHour': false,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        'maximumTableSize': 6,
        'location': `51°29'13.8"N 0°06'15"W`,
        'dietaryRequirements': {'vegetarian': true, 'vegan': true, 'halal': false, 'glutenfree': false, 'dairyfree': true},
        'sitting': {'breakfast': true, 'lunch': false, 'dinner': false},
        'cuisine': 'tapas',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    {
        "restaurantId": 15,
        'name': `Vegan Only`,
        'offerPercent': '10%',
        'validUntil': '31 Feb',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': false,
        'happyHour': false,
        'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        'maximumTableSize': 6,
        'location': `51°22'13.8"N 0°05'15"W`,
        'dietaryRequirements': {'vegetarian': false, 'vegan': true, 'halal': false, 'glutenfree': true, 'dairyfree': true},
        'sitting': {'breakfast': true, 'lunch': true, 'dinner': true},
        'cuisine': ['italian', 'spanish', 'french', 'british', 'tapas'],
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
    {
        'restaurantId': 16,
        'name': `The Hall`,
        'offerPercent': '20%',
        'validUntil': '31 Jan',
        'offerDescription': ``,
        'image': 'https://source.unsplash.com/500x500/?food',
        'discountOnFood': true,
        'discountOnDrinks': false,
        'happyHour': false,
        'daysAvailable': ['tuesday', 'thursday'],
        'maximumTableSize': 6,
        'location': `51°29'13.1"N 0°05'15.3"W`,
        'dietaryRequirements': {'vegetarian': false, 'vegan': false, 'halal': true, 'glutenfree': false, 'diaryfree': false},
        'sitting': {'breakfast': false, 'lunch': true, 'dinner': true},
        'cuisine': 'mediterranean',
        'email': 'testemail@testemail.co.uk',
        'phoneNumber': '0234 343 2343'
    },
]


export default restaurants;