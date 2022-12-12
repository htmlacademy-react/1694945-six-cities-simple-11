import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../services/api';
import {
  fetchSelectedOfferAction,
  fetchOtherOffersAction,
  fetchReviewsAction,
  sendReviewAction,
} from './api-actions';
import { State } from '../../types/state';
import { StatusCodes } from 'http-status-codes';
import {
  makeFakeOffer,
  makeFakeOffers,
  makeFakeReviews,
} from '../../mocks/mocks';
import { APIRoute } from '../../const';

const fakeOfferId = 1;
const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();
const fakeReviews = makeFakeReviews();

describe('Async actions: propertyProcess', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should load offer property when server returned 200', async () => {
    mockAPI
      .onGet(`${APIRoute.Offers}/${fakeOfferId}`)
      .reply(StatusCodes.OK, fakeOffer);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const { payload } = await store.dispatch(
      fetchSelectedOfferAction(fakeOfferId)
    );

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSelectedOfferAction.pending.type,
      fetchSelectedOfferAction.fulfilled.type,
    ]);

    expect(payload).toEqual(fakeOffer);
  });

  it('should load nearest offers when server returned 200', async () => {
    mockAPI
      .onGet(`${APIRoute.Offers}/${fakeOfferId}/nearby`)
      .reply(StatusCodes.OK, fakeOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const { payload } = await store.dispatch(
      fetchOtherOffersAction(fakeOfferId)
    );

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOtherOffersAction.pending.type,
      fetchOtherOffersAction.fulfilled.type,
    ]);

    expect(payload).toEqual(fakeOffers);
  });

  it('should load reviews when server returned 200', async () => {
    mockAPI
      .onGet(`${APIRoute.Reviews}/${fakeOfferId}`)
      .reply(StatusCodes.OK, fakeReviews);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const { payload } = await store.dispatch(fetchReviewsAction(fakeOfferId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type,
    ]);

    expect(payload).toEqual(fakeReviews);
  });

  it('should send review and load updated reviews when server returned 200', async () => {
    const fakeReview = { rating: 5, comment: 'It is a new review.' };

    mockAPI
      .onPost(`${APIRoute.Reviews}/${fakeOfferId}`)
      .reply(StatusCodes.OK, fakeReviews);

    const store = mockStore();

    const { payload } = await store.dispatch(
      sendReviewAction({ ...fakeReview, id: fakeOfferId })
    );

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReviewAction.fulfilled.type,
    ]);

    expect(payload).toEqual(fakeReviews);
  });
});
