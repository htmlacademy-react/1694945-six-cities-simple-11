import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  isOffersDataLoading: boolean;
  activeCity: City;
  activeSort: string;
  offers: Offer[];
  reviews: Review[];
}
