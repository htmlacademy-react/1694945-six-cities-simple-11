import {
  datatype,
  commerce,
  image,
  internet,
  address,
  lorem,
  date,
} from 'faker';
import { User } from '../types/user';
import { UserData } from '../types/user-data';
import { Location } from '../types/location';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const makeFakeUser = (): User => ({
  id: datatype.number(),
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  token: datatype.string(),
});

const makeFakeLocation = (): Location => ({
  zoom: datatype.number({ min: 5, max: 15 }),
  latitude: datatype.number({ min: 1, max: 10, precision: 0.0001 }),
  longitude: datatype.number({ min: 1, max: 10, precision: 0.0001 }),
});

const makeFakeCity = (): City => ({
  name: address.city(),
  location: makeFakeLocation(),
});

export const makeFakeOffer = (): Offer => ({
  id: datatype.number(),
  isPremium: datatype.boolean(),
  title: commerce.productName(),
  type: commerce.product(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  previewImage: image.imageUrl(),
  images: Array.from({ length: 6 }, () => image.imageUrl(260, 200, '', true)),
  bedrooms: datatype.number({ min: 1, max: 5 }),
  maxAdults: datatype.number({ min: 1, max: 5 }),
  goods: Array.from(new Set(Array.from({ length: 10 }, () => commerce.product()))),
  description: commerce.productDescription(),
  host: makeFakeUser(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
});

export const makeFakeOffers = (): Offer[] =>
  Array.from({ length: 10 }, makeFakeOffer);

export const makeFakeOtherOffers = (): Offer[] =>
  Array.from({ length: 3 }, makeFakeOffer);

export const makeFakeReview = (): Review => ({
  id: datatype.number(),
  user: makeFakeUser(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

export const makeFakeReviews = (): Review[] =>
  Array.from({ length: 10 }, makeFakeReview);
