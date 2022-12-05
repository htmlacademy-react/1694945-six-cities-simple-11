import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import CardPremiumMark from './card/card-premium-mark';
import CardPreview from './card/card-preview';
import CardPrice from './card/card-price';
import CardRating from './card/card-rating';
import CardName from './card/card-name';
import CardType from './card/card-type';

type CardProps = {
  offer: Offer;
  onMouseOver: () => void;
  onMouseOut: () => void;
};

function OfferCard({
  offer,
  onMouseOver,
  onMouseOut
}: CardProps): JSX.Element {
  const {
    id,
    previewImage,
    price,
    title,
    type,
    rating,
    isPremium
  } = offer;
  const link = `${AppRoute.Room}/${id}`;
  return (
    <article
      className="cities__card place-card"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {isPremium && <CardPremiumMark />}
      <CardPreview
        link={link}
        previewImage={previewImage}
        title={title}
      />
      <div className="place-card__info">
        <CardPrice price={price} />
        <CardRating rating={rating} />
        <CardName
          link={link}
          title={title}
        />
        <CardType type={type} />
      </div>
    </article>
  );
}
export default OfferCard;
