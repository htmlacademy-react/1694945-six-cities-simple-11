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
  ActiveCity = 10,
  Location = 8,
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
      lat: 48.8534100,
      lng: 2.3488000,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Cologne',
    location: {
      lat: 50.9333300,
      lng: 6.9500000,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.8504500,
      lng: 4.3487800,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.3740300,
      lng: 4.8896900,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.5753200,
      lng: 10.0153400,
      zoom: Zoom.ActiveCity,
    }
  },
  {
    name: 'Dusseldorf',
    location:{
      lat: 51.2217200,
      lng: 6.7761600,
      zoom: Zoom.ActiveCity,
    }
  }
];
export const ACTIVE_CITY = CITIES[3];
export const SORT_TYPES = Object.freeze([
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
]);
export const ACTIVE_SORT = SORT_TYPES[0];
export const REVIEWS_LIST_LENGTH = 10;
export const LAYER_OPTION = {
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};
