import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer } from '../types/offer';
import { Review, ReviewData } from '../types/review';
import {
  requireAuthorization,
  redirectToRoute,
  loadUserData,
  setDataLoadingStatus,
  loadOffers,
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews,
  setReviewFormBlocked
} from './actions';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

export const checkAuthorizeAction = createAsyncThunk<
  void,
  null,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  null,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const fetchOffersAction = createAsyncThunk<
  void,
  null,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchSelectedOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadSelectedOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadSelectedOffer(data));
      dispatch(setDataLoadingStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      dispatch(setDataLoadingStatus(false));
    }
  }
);

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

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewsAction',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, {rating, comment});
    dispatch(fetchReviewsAction(id));
    dispatch(setReviewFormBlocked(false));
  }
);
