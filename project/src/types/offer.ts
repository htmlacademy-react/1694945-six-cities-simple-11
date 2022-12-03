import {User} from './user';
import {City} from './city';
import {Location} from './location';

export type OfferId = number;
export type Offer = {
  id: OfferId;
  isPremium: boolean;
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: User;
  city: City;
  location: Location;
};
