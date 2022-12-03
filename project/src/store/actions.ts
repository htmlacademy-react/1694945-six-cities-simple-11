import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../types/user-data';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({payload: status})
);

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);

export const setDataLoadingStatus = createAction(
  'data/setDataLoadingStatus',
  (status: boolean) => ({payload: status})
);

export const changeCity = createAction(
  'data/changeCity',
  (city: City) => ({ payload: city })
);

export const setActiveSort = createAction(
  'data/setActiveSort',
  (sort: string) => ({ payload: sort })
);

export const loadOffers = createAction(
  'data/loadOffers',
  (offers: Offer[]) => ({payload: offers})
);

export const loadSelectedOffer = createAction(
  'data/loadSelectedOffer',
  (selectedOffer: Offer) => ({payload: selectedOffer})
);

export const loadOtherOffers = createAction(
  'data/loadOtherOffers',
  (otherOffers: Offer[]) => ({payload: otherOffers})
);

export const loadReviews = createAction(
  'data/loadReviews',
  (reviews: Review[]) => ({payload: reviews})
);

export const setReviewFormBlocked = createAction(
  'data/setReviewFormBlocked',
  (status: boolean) => ({payload: status})
);
