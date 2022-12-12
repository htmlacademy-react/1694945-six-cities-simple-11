import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../services/api';
import { fetchOffersAction } from './api-actions';
import { State } from '../../types/state';
import { StatusCodes } from 'http-status-codes';
import { makeFakeOffers } from '../../mocks/mocks';
import { APIRoute } from '../../const';

const fakeOffers = makeFakeOffers();

describe('Async actions: offersProcess', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should load offers when server returned 200', async () => {
    mockAPI.onGet(APIRoute.Offers).reply(StatusCodes.OK, fakeOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    const { payload } = await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);

    expect(payload).toEqual(fakeOffers);
  });
});
