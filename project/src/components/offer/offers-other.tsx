import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from './offer-card';
type OffersOtherComponentProps = {
  offers: Offer[];
};
function OffersOther({ offers }: OffersOtherComponentProps): JSX.Element {
  const [, setActiveCard] = useState(0);
  const cards = offers.map((offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      mouseOverHandler={() => setActiveCard(offer.id)}
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
