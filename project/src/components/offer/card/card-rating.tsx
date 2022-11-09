import { calculateRatingWidth } from '../../../utils';

type CardRatingComponentProps = {
  rating: number;
};
function CardRating({ rating }: CardRatingComponentProps) {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: calculateRatingWidth(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
export default CardRating;
