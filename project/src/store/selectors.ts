import { State } from '../types/state';
import { orderOffersByType, getOffersByCity } from '../utils';
export const getSortedOffers = (state: State) => orderOffersByType(
  getOffersByCity(
    state.offers,
    state.activeCity.name
  ),
  state.activeSort
);
