import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.js';
import { Offer } from '../../types/offer';
import { Review, ReviewData } from '../../types/review';
import { APIRoute } from '../../const';

export const fetchSelectedOfferAction = createAsyncThunk<
  Offer,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadSelectedOffer', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
  return data;
});

export const fetchOtherOffersAction = createAsyncThunk<
  Offer[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOtherOffers', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviewsAction', async (offerId, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
  return data;
});

export const sendReviewAction = createAsyncThunk<
  Review[],
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/sendReviewAction', async ({ id, rating, comment }, { extra: api }) => {
  const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {
    rating,
    comment,
  });
  return data;
});
