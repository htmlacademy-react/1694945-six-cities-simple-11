import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ACTIVE_CITY, ACTIVE_SORT } from '../../const';
import { OffersProcess } from '../../types/state';
import { fetchOffersAction } from './api-actions';
import { setActiveCity, setActiveSort } from './actions';
import { Offer } from '../../types/offer';

const initialState: OffersProcess = {
  offers: [] as Offer[],
  areOffersLoading: false,
  hasOffersLoadingError: false,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.areOffersLoading = true;
        state.hasOffersLoadingError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.areOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.areOffersLoading = false;
        state.hasOffersLoadingError = true;
      })
      .addCase(setActiveCity, (state, action) => {
        state.activeCity = action.payload;
      })
      .addCase(setActiveSort, (state, action) => {
        state.activeSort = action.payload;
      });
  }
});
