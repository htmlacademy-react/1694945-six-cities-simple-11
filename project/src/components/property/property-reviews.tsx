import { useAppSelector } from '../../hooks/use-app-selector';
import { calculateRatingWidth, formatDate, getSortedReviews } from '../../utils';
import ReviewForm from './review/review-form';

type PropertyReviewsProps = {
  isAuthorized: boolean;
  offerId: number;
};

function PropertyReviews({ isAuthorized, offerId }: PropertyReviewsProps): JSX.Element | null {
  const reviews = useAppSelector((state) => state.reviews);
  const foundReviews = reviews.filter((review) => review.offerId === offerId);
  if (foundReviews.length === 0) {
    return null;
  }
  const sortedReviews = getSortedReviews(foundReviews);
  const reviewsList = sortedReviews.map((review) => (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: calculateRatingWidth(review.rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time
          className="reviews__time"
          dateTime={review.date}
        >
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  ));
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{foundReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
      {isAuthorized && <ReviewForm />}
    </section>
  );
}
export default PropertyReviews;
