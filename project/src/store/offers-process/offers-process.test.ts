import {offersProcess, setActiveCity, setActiveSort} from './offers-process';
import {fetchOffersAction} from './api-actions';
import {OffersProcess} from '../../types/state';
import {Offer} from '../../types/offer';
import {makeFakeOffers} from '../../mocks/mocks';
import {ACTIVE_CITY, ACTIVE_SORT} from '../../const';

const fakeOffers = makeFakeOffers();

describe('Reducer: offerProcess', () => {
  let state: OffersProcess;

  beforeEach(() => {
    state = {
      activeCity: ACTIVE_CITY,
      activeSort: ACTIVE_SORT,
      offers: [] as Offer[],
      areOffersLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: setActiveCity', () => {
    it('should change city by given value', () => {
      expect(offersProcess.reducer(state, {type: setActiveCity, payload: ACTIVE_CITY}))
        .toEqual({...state, activeCity: ACTIVE_CITY});
    });
  });

  describe('Action: changeSort', () => {
    it('should change sort type by given value', () => {
      expect(offersProcess.reducer(state, {type: setActiveSort, payload: ACTIVE_SORT}))
        .toEqual({...state, activeSort: ACTIVE_SORT});
    });
  });

  describe('Action: fetchOffersAction', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(offersProcess.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({...state, areOffersLoading: true});
    });

    it('should update loading status to "false" and loaded offers if action fulfilled', () => {
      expect(offersProcess.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: fakeOffers}))
        .toEqual({...state, areOffersLoading: false, offers: fakeOffers});
    });
  });
});
