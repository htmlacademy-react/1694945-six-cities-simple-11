import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffersList } from './actions';
import { ACTIVE_CITY } from '../const';
import { OFFERS } from '../mocks/offers';
import { REVIEWS } from '../mocks/reviews';
import { getOffersByCity } from '../utils';

const initialState = {
  activeCity: ACTIVE_CITY,
  allOffers: OFFERS,
  offers: getOffersByCity(OFFERS, ACTIVE_CITY.name),
  reviews: REVIEWS,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(updateOffersList, (state) => {
    state.offers = getOffersByCity(state.allOffers, state.activeCity.name);
  });
});

export { reducer };
