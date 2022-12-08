import { Offer } from '../types/offer';
import { Review } from '../types/review';

export type InitialState = {
  selectedOffer: Offer | null;
  otherOffers: Offer[] | null;
  reviews: Review[] | null;
  isReviewFormBlocked: boolean;
}
