import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { getSortedReviews } from '../../utils';

export const getSelectedOffer = (state: State): Offer | null =>
  state[NameSpace.Property].selectedOffer;
export const getSelectedOfferLoadingStatus = (state: State): boolean =>
  state[NameSpace.Property].isSelectedOfferLoading;
export const getSelectedOfferLoadingError = (state: State): boolean =>
  state[NameSpace.Property].hasSelectedOfferLoadingError;
export const getOtherOffers = (state: State): Offer[] | null =>
  state[NameSpace.Property].otherOffers;
export const getReviews = (state: State): Review[] | null =>
  getSortedReviews(state[NameSpace.Property].reviews);
export const getReviewFormBlockedStatus = (state: State): boolean =>
  state[NameSpace.Property].isReviewFormBlocked;
