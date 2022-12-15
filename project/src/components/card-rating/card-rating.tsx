import { calculateRatingWidth } from '../../utils';

type CardRatingProps = {
  rating: number;
};
function CardRating({ rating }: CardRatingProps) {
  return (
    <div className="place-card__rating rating" data-testid="card-rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: calculateRatingWidth(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
export default CardRating;
