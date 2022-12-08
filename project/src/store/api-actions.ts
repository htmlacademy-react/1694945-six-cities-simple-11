import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offer';
import { Review, ReviewData } from '../types/review';
import {
  redirectToRoute,
  setOffersLoadingStatus,
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews,
  setReviewFormBlocked,
} from './actions';

import { APIRoute, AppRoute } from '../const';

export const fetchSelectedOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadSelectedOffer', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  try {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadSelectedOffer(data));
    dispatch(setOffersLoadingStatus(false));
  } catch {
    dispatch(redirectToRoute(AppRoute.NotFound));
    dispatch(setOffersLoadingStatus(false));
  }
});

export const fetchOtherOffersAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOtherOffers', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  dispatch(loadOtherOffers(data));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviewsAction', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
  dispatch(loadReviews(data));
});

export const sendReviewAction = createAsyncThunk<
  void,
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendReviewAction',
  async ({ id, rating, comment }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Reviews}/${id}`, { rating, comment });
    dispatch(fetchReviewsAction(id));
    dispatch(setReviewFormBlocked(false));
  }
);
