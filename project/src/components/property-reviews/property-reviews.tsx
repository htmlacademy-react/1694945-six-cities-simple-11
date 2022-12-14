import { AuthorizationStatus } from '../../const';
import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewListItem from '../review-list-item/review-list-item';

type PropertyReviewsProps = {
  authorizationStatus: AuthorizationStatus;
  reviews: Review[] | null;
  selectedOffer: number;
};

function PropertyReviews({
  authorizationStatus,
  reviews,
  selectedOffer
}: PropertyReviewsProps): JSX.Element {
  const reviewsListItems = reviews && reviews.map((review) => (
    <ReviewListItem
      key={review.id}
      review={review}
    />
  ));
  return (
    <section className="property__reviews reviews" data-testid="property-reviews">
      {reviews && reviews.length > 0 &&
        <>
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ul className="reviews__list">
            {reviewsListItems}
          </ul>
        </>}
      {
        authorizationStatus === AuthorizationStatus.Auth
        &&
        <ReviewForm selectedOffer={selectedOffer} />
      }
    </section>
  );
}
export default PropertyReviews;
