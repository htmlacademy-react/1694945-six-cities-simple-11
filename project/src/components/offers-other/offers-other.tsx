import { useState } from 'react';
import { Offer } from '../../types/offer';
import Card from '../card/card';
type OffersOtherProps = {
  offers: Offer[];
};
function OffersOther({ offers }: OffersOtherProps): JSX.Element {
  const [, setActiveCard] = useState(0);
  const cards = offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      onMouseOver={() => setActiveCard(offer.id)}
      onMouseOut={() => setActiveCard(0)}
    />
  ));
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {cards}
      </div>
    </section>
  );
}
export default OffersOther;
