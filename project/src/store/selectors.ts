import { State } from '../types/state';
import { orderOffersByType, getOffersByCity } from '../utils';
const getSortedOffers = (state: State) => orderOffersByType(
  getOffersByCity(
    state.offers,
    state.activeCity.name
  ),
  state.activeSort
);
export default getSortedOffers;
