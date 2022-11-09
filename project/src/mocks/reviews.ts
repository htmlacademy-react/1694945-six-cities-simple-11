import { Reviews } from '../types/review';
export const reviews: Reviews = [
  {
    id: 1,
    offerId: 1,
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 4,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: 2,
    offerId: 2,
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 5,
    comment: 'Very cheap!',
    date: '2019-04-24',
  },
  {
    id: 3,
    offerId: 3,
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 3,
    comment: 'Very nice view but noisy...',
    date: '2019-04-24',
  },
  {
    id: 5,
    offerId: 1,
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 4,
    comment:
      'Building is old but safe',
    date: '2019-04-30',
  },
];
