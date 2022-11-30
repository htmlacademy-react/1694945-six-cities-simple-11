import { City } from './types/city';
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
export enum Zoom {
  ActiveCity = 12,
  Location = 10,
}
export enum IconUrl {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}
export enum IconDimension {
  Width = 28,
  Height = 40,
  AnchorWidth = 14,
}
export enum FormatDate {
  Locale = 'en-US',
  Month = 'long',
  Year = 'numeric',
}
export enum Rating {
  Max = 5,
  MultiplyValue = 20,
}
export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
export const ACCOMODAION_TYPES = Object.freeze({
  apartment: 'Apartment',
  room: 'Private room',
  house: 'House',
  hotel: 'Hotel',
});
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

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9333300,
      longitude: 6.9500000,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8504500,
      longitude: 4.3487800,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3740300,
      longitude: 4.8896900,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Dusseldorf',
    location:{
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: Zoom.ActiveCity,
    }
  }
];
export const ACTIVE_CITY = CITIES[0];
export const SORT_TYPES = Object.freeze([
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
]);
export const ACTIVE_SORT = SORT_TYPES[0];
export const OTHER_OFFERS_LIST_LENGTH = 3;
export const REVIEWS_LIST_LENGTH = 10;
export const LAYER_OPTION = {
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};
export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;
export const AUTHORIZATION_TOKEN_KEY_NAME = 'six-cities-simple-token';
export const TIMEOUT_SHOW_ERROR = 2000;
