import { Offer } from '../../types/offer';
import CardPremiumMark from './card/card-premium-mark';
import CardPreview from './card/card-preview';
import CardPrice from './card/card-price';
import CardRating from './card/card-rating';
import CardName from './card/card-name';
import CardType from './card/card-type';

type CardComponentProps = {
  offer: Offer;
  mouseOverHandler: () => void;
};

function OfferCard({ offer, mouseOverHandler }: CardComponentProps): JSX.Element {
  const {
    id,
    previewImage,
    price,
    title,
    type,
    rating,
    isPremium
  } = offer;
  const link = `/offer/${id}`;
  return (
    <article
      className="cities__card place-card"
      onMouseOver={mouseOverHandler}
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
