import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, ACTIVE_CITY, ACTIVE_SORT } from '../../const';
import { OffersProcess } from '../../types/state';
import { fetchOffersAction } from './api-actions';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

const initialState: OffersProcess = {
  offers: [] as Offer[],
  areOffersLoading: false,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    },
    setActiveSort: (state, action: PayloadAction<string>) => {
      state.activeSort = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.areOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.areOffersLoading = false;
      });
  }
});
export const {setActiveCity, setActiveSort} = offersProcess.actions;
