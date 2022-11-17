import { calculateRatingWidth } from '../../utils';

type PropertyRatingProps = {
  rating: number;
};
function PropertyRating({ rating }: PropertyRatingProps): JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: calculateRatingWidth(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}
export default PropertyRating;
