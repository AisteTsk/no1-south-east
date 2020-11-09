"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var restaurants = [{
  "restaurantId": 1,
  'name': "Ollie's Oysterhouse",
  'offerPercent': '30%',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'validUntil': '31 Nov 2020',
  'offerAdded': '31 Oct 2020',
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': false,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
  'maximumTableSize': 4,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': true
  },
  'location': [51.474333, 0.044083],
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['tapas', 'mediterranean'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  'restaurantId': 2,
  'name': "Billy Big Burgers",
  'offerPercent': '15%',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'validUntil': '31 Nov 2020',
  'offerAdded': '31 Nov 2020',
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  'maximumTableSize': 4,
  'dietaryRequirements': {
    'vegetarian': false,
    'vegan': false,
    'halal': true,
    'glutenfree': false,
    'dairyfree': false
  },
  'location': [51.474333, 0.044639],
  'sitting': {
    'breakfast': false,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['american'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 3,
  'name': "The big Crab",
  'offerPercent': '25%',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'validUntil': '31 Apr 2021',
  'offerAdded': '1 Dec 2020',
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': false,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
  'maximumTableSize': 2,
  'location': [51.474333, 0.04408],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': false
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['seafood'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 4,
  'name': "The Friendly Shark",
  'offerPercent': '25%',
  'validUntil': '31 Mar 2021',
  'offerAdded': '1 Apr 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  'maximumTableSize': 6,
  'location': [51.452778, -0.230556],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': false,
    'dairyfree': true
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['chinese', 'japanese'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 5,
  'name': "Caddy Shack",
  'offerPercent': '80%',
  'validUntil': '31 May 2021',
  'offerAdded': '1 Jul 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': false,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
  'maximumTableSize': 6,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': false,
    'dairyfree': false
  },
  'location': [51.452778, -0.222222],
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['mexican', 'spanish'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 6,
  'name': "The Lovely Wolf",
  'offerPercent': '15%',
  'validUntil': '31 Sep 2021',
  'offerAdded': '10 Sep 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': false
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
  'maximumTableSize': 4,
  'location': [51.453333, -0.188889],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': true
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['italian', 'spanish'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  'restaurantId': 7,
  'name': "Thai Delight",
  'offerPercent': '10%',
  'validUntil': '31 Aug 2022',
  'offerAdded': '1 Sep 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': false,
  'daysAvailable': ['wednesday', 'thursday', 'sunday'],
  'maximumTableSize': 6,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': true
  },
  'location': [51.469250, -0.188889],
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['thai'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 8,
  'name': "Krusty Krab",
  'offerPercent': '10%',
  'validUntil': '31 Nov 2023',
  'offerAdded': '1 Dec 2020',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': false
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'sunday'],
  'maximumTableSize': 6,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': false
  },
  'location': [51.469250, -0.201389],
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['mexican', 'american'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 9,
  'name': "The Burger Experience",
  'offerPercent': '80%',
  'validUntil': '31 Jun 2021',
  'offerAdded': '1 Jun 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': false,
    'drink': true
  },
  'happyHour': false,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday'],
  'maximumTableSize': 6,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': false,
    'dairyfree': false
  },
  'location': [51.469250, -0.251389],
  'sitting': {
    'breakfast': false,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['mexican', 'american'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 10,
  'name': "Pizza Palace",
  'offerPercent': '20%',
  'validUntil': '31 Oct 2021',
  'offerAdded': '1 Aug 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  'maximumTableSize': 5,
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': false,
    'dairyfree': true
  },
  'location': [51.402583, -0.253056],
  'sitting': {
    'breakfast': false,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['spanish', 'italian'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 11,
  'name': "In my Grill",
  'offerPercent': '5%',
  'validUntil': '31 Oct 2021',
  'offerAdded': '1 Mar 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': false
  },
  'happyHour': false,
  'daysAvailable': ['friday', 'saturday', 'sunday'],
  'maximumTableSize': 5,
  'location': [51.402583, -0.103056],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': false,
    'dairyfree': false
  },
  'sitting': {
    'breakfast': false,
    'lunch': false,
    'dinner': true
  },
  'cuisine': ['italian'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 12,
  'name': "Dad Bod Incoming",
  'offerPercent': '15%',
  'validUntil': '31 Jul 2021',
  'offerAdded': '1 Jun 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  'maximumTableSize': 2,
  'location': [51.452583, -0.103056],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': false,
    'halal': false,
    'glutenfree': true,
    'dairyfree': true
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['american', 'british'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 13,
  'name': "Peters Piella",
  'offerPercent': '15%',
  'validUntil': '31 Mar 2021',
  'offerAdded': '1 Feb 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': false,
    'drink': true
  },
  'happyHour': true,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday'],
  'maximumTableSize': 10,
  'location': [51.486111, -0.103361],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': true,
    'glutenfree': true,
    'dairyfree': false
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['spanish'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 14,
  'name': "Crumbs & Cookies",
  'offerPercent': '10%',
  'validUntil': '31 Dec 2020',
  'offerAdded': '1 Oct 2020',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': false
  },
  'happyHour': false,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  'maximumTableSize': 6,
  'location': [51.487167, -0.104167],
  'dietaryRequirements': {
    'vegetarian': true,
    'vegan': true,
    'halal': false,
    'glutenfree': false,
    'dairyfree': true
  },
  'sitting': {
    'breakfast': true,
    'lunch': false,
    'dinner': false
  },
  'cuisine': ['tapas'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  "restaurantId": 15,
  'name': "Vegan Only",
  'offerPercent': '10%',
  'validUntil': '31 Feb 2021',
  'offerAdded': '1 Jan 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': true
  },
  'happyHour': false,
  'daysAvailable': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  'maximumTableSize': 9,
  'location': [51.370500, -0.087500],
  'dietaryRequirements': {
    'vegetarian': false,
    'vegan': true,
    'halal': false,
    'glutenfree': true,
    'dairyfree': true
  },
  'sitting': {
    'breakfast': true,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['italian', 'spanish', 'french', 'british', 'tapas'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 2343',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}, {
  'restaurantId': 16,
  'name': "The Hall",
  'offerPercent': '20%',
  'validUntil': '31 Jan 2021',
  'offerAdded': '1 Jan 2021',
  'offerDescription': "Get 20% off the Total Bill Mon-Wed at Lunch and dinner. Offer available on the A La Carte Menu only.",
  'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/11/12/norma-restaurant-fitzrovia.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
  'discount': {
    'food': true,
    'drink': false
  },
  'happyHour': false,
  'daysAvailable': ['tuesday', 'thursday'],
  'maximumTableSize': 12,
  'location': [51.486972, -0.087583],
  'dietaryRequirements': {
    'vegetarian': false,
    'vegan': false,
    'halal': true,
    'glutenfree': false,
    'diaryfree': false
  },
  'sitting': {
    'breakfast': false,
    'lunch': true,
    'dinner': true
  },
  'cuisine': ['mediterranean'],
  'email': 'testemail@testemail.co.uk',
  'phoneNumber': '0234 343 237',
  'instagram': 'https://www.instagram.com/',
  'website': 'https://asakusa.has.restaurant/',
  'restaurantDescription': 'The Bank was launched in 2019 and offers a wide range of luxury wines and tapas meals.',
  'termsAndConditions': 'Bookings must be made in advance and No.1 South East should be noted in the booked and on arrival.'
}];
var _default = restaurants;
exports["default"] = _default;