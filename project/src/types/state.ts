import {store} from '../store/store';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Offer } from './offer';
import { City } from './city';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};
export type OffersProcess = {
  offers: Offer[];
  areOffersLoading: boolean;
  hasOffersLoadingError: boolean;
  activeCity: City;
  activeSort: string;
};
