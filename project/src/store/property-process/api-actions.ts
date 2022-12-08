import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.js';
import { Offer } from '../../types/offer';
import { Review, ReviewData } from '../../types/review';
/*import {
  redirectToRoute,
  setOffersLoadingStatus,
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews,
  setReviewFormBlocked,
} from './actions';*/

import { APIRoute } from '../../const';

export const fetchSelectedOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadSelectedOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchOtherOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOtherOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviewsAction', async (offerId, {extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
  return data;
});

export const sendReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, {rating, comment});
    dispatch(fetchReviewsAction(id));
  }
);
