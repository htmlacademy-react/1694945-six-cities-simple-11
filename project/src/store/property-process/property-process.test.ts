import { propertyProcess } from './property-process';
import {
  fetchSelectedOfferAction,
  fetchOtherOffersAction,
  fetchReviewsAction,
  sendReviewAction,
} from './api-actions';
import { PropertyProcess } from '../../types/state';
import {
  makeFakeOffer,
  makeFakeOffers,
  makeFakeReviews,
} from '../../mocks/mocks';

const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();
const fakeReviews = makeFakeReviews();
describe('Reducer: propertyProcess', () => {
  let state: PropertyProcess;

  beforeEach(() => {
    state = {
      selectedOffer: null,
      isSelectedOfferLoading: false,
      hasSelectedOfferLoadingError: false,
      otherOffers: null,
      reviews: [],
      isReviewFormBlocked: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(propertyProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  describe('Action: fetchSelectedOfferAction', () => {
    it('should update loading status to "true" and reset error if action pending', () => {
      expect(
        propertyProcess.reducer(state, {
          type: fetchSelectedOfferAction.pending.type,
        })
      ).toEqual({
        ...state,
        isSelectedOfferLoading: true,
        hasSelectedOfferLoadingError: false,
      });
    });

    it('should update loading status to "false" and loaded offer property if action fulfilled', () => {
      expect(
        propertyProcess.reducer(state, {
          type: fetchSelectedOfferAction.fulfilled.type,
          payload: fakeOffer,
        })
      ).toEqual({
        ...state,
        isSelectedOfferLoading: false,
        selectedOffer: fakeOffer,
      });
    });

    it('should update loading status to "false" and add error if action rejected', () => {
      expect(
        propertyProcess.reducer(state, {
          type: fetchSelectedOfferAction.rejected.type,
        })
      ).toEqual({
        ...state,
        isSelectedOfferLoading: false,
        hasSelectedOfferLoadingError: true,
      });
    });
  });

  describe('Action: fetchOtherOffersAction', () => {
    it('should loaded nearest offers if action fulfilled', () => {
      expect(
        propertyProcess.reducer(state, {
          type: fetchOtherOffersAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({ ...state, otherOffers: fakeOffers });
    });
  });

  describe('Action: fetchReviewAction', () => {
    it('should loaded reviews if action fulfilled', () => {
      expect(
        propertyProcess.reducer(state, {
          type: fetchReviewsAction.fulfilled.type,
          payload: fakeReviews,
        })
      ).toEqual({ ...state, reviews: fakeReviews });
    });
  });

  describe('Action: sendReviewAction', () => {
    it('should update form block status to "true" if action pending', () => {
      expect(
        propertyProcess.reducer(state, { type: sendReviewAction.pending.type })
      ).toEqual({ ...state, isReviewFormBlocked: true });
    });

    it('should update form block status to "false" and loaded reviews if action fulfilled', () => {
      expect(
        propertyProcess.reducer(state, {
          type: sendReviewAction.fulfilled.type,
          payload: fakeReviews,
        })
      ).toEqual({ ...state, reviews: fakeReviews, isReviewFormBlocked: false });
    });

    it('should update form block status to "false" if action rejected', () => {
      expect(
        propertyProcess.reducer(state, { type: sendReviewAction.rejected.type })
      ).toEqual({ ...state, isReviewFormBlocked: false });
    });
  });
});
