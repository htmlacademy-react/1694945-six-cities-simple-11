export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '*',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum AccomodationType {
  apartment = 'Apartment',
  room = 'Private room',
  house = 'House',
  hotel = 'Hotel',
}
export const MARKS = Object.freeze([
  {
    key: 5,
    value: 'perfect',
  },
  {
    key: 4,
    value: 'good',
  },
  {
    key: 3,
    value: 'not bad',
  },
  {
    key: 2,
    value: 'badly',
  },
  {
    key: 1,
    value: 'terribly',
  },
]);
export const CITIES = Object.freeze([
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
]);
export const ACTIVE_CITY = CITIES[3];
export const SORT_TYPES = Object.freeze([
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
]);
export const ACTIVE_SORT = SORT_TYPES[0];
export const LOCALE = 'en-US';
export const FORMAT_MONTH = 'long';
export const FORMAT_YEAR = 'numeric';
export const REVIEWS_LIST_LENGTH = 10;
export const RATING_MAX = 5;
export const RATING_VALUE = 20;
