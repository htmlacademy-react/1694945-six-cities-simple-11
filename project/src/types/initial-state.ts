import { AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  activeCity: City;
  activeSort: string;
  offers: Offer[];
  reviews: Review[];
}
