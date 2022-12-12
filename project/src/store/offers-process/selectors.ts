import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { City } from '../../types/city';
import { orderOffersByType, getOffersByCity } from '../../utils';

export const getActiveCity = (state: State): City => state[NameSpace.Offers].activeCity;
export const getActiveSortType = (state: State) => state[NameSpace.Offers].activeSort;
export const getOffers = (state: State) => orderOffersByType(
  getOffersByCity(
    state[NameSpace.Offers].offers,
    state[NameSpace.Offers].activeCity.name
  ),
  state[NameSpace.Offers].activeSort
);
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;
