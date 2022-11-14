import { Zoom } from '../const';
import { Offer } from '../types/offer';
export const offers: Offer[] = [
  {
    id: 1,
    isPremium: true,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Heating', 'Kitchen' , 'Fridge', 'Washing Machine', ' Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cable TV'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3740300,
        lng: 4.8896900,
        zoom: Zoom.ActiveCity,
      }
    },
    location: {
      zoom: Zoom.Location,
      lat: 52.3909553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 2,
    isPremium: false,
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4,
    previewImage: 'img/room.jpg',
    images: ['img/room.jpg'],
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Plastic furniture', 'Bunkbed', 'Air conditioner', 'Heater', 'Wi-Fi', 'Flatscreen TV'],
    description: 'Working professional for a spacious and furnished Room for rent in an 80m² fully furnished apartment located on the 3rd Floor located at Barbusselaan, Amsterdam.',
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3740300,
        lng: 4.8896900,
        zoom: Zoom.ActiveCity,
      }
    },
    location: {
      zoom: Zoom.Location,
      lat: 52.3609553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 3,
    isPremium: false,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['King-size bed','Bunkbed','Bathroom and toilet', 'Hairdryer','Safe', 'Nespresso machine','Kettle','Coffee and tea','Fridge','Stove','Dish washer','Microwave or oven','Cooking utensils','Glassware','Mugs','Cutlery','Towels','Washing machine','Dryer','Iron and ironing board','Wi-Fi','Flatscreen TV'],
    description: 'Experience Amsterdam like a true local in one of these apartments along the Prinsengracht in the heart of the Amsterdam canal district. The short stay apartments are located in a gorgeous, newly renovated 17th-century townhouse that emanates a typically Amsterdam feel – the characteristic staircase and original beams are still prominent features. These apartments full of contemporary art offer every luxury and allow you to experience the best of the Prinsengracht. You immediately feel at home in the eccentric neighbourhood with its sociable restaurants, bars, galleries and museums and the beloved Amsterdam canal view is spectacular!',
    host: {
      id: 2,
      name: 'Max',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg'
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3740300,
        lng: 4.8896900,
        zoom: Zoom.ActiveCity,
      }
    },
    location: {
      zoom: Zoom.Location,
      lat: 52.3909553943508,
      lng: 4.929309666406198
    }
  },
  {
    id: 4,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['King-size bed','Bunkbed','Rainfall shower','Luxurious toiletries', 'Hairdryer','Safe', 'Nespresso machine','Kettle','Coffee and tea','Fridge','Stove','Dish washer','Microwave or oven','Cooking utensils','Glassware','Mugs','Cutlery','Towels','Washing machine','Dryer','Iron and ironing board', 'Wardrobe or closet', 'Heater', 'Wi-Fi','Flatscreen TV', 'Pets allowed'],
    description: 'The accommodation comes with a seating area and a flat-screen TV. All rooms are equipped with a wardrobe.The property is situated on the 4th floor and only accessible via steep stairs that are typical for historical buildings in Amsterdam.',
    host: {
      id: 2,
      name: 'Max',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg'
    },
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.3740300,
        lng: 4.8896900,
        zoom: Zoom.ActiveCity,
      }
    },
    location: {
      zoom: Zoom.Location,
      lat: 52.3809553943508,
      lng: 4.939309666406198
    }
  }
];
