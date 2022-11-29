import { useState } from 'react';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { SORT_TYPES } from '../../const';
import OfferCard from './offer-card';
import OffersSort from './offers-sort';
import { getPluralWord } from '../../utils';
import Map from '../../components/map/map';

type OffersListProps = {
  offers: Offer[];
  city: City;
};

function OffersList({ offers, city }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const cards = offers.map((offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      mouseOverHandler={() => setActiveCard(offer.id)}
      mouseOutHandler={() => setActiveCard(0)}
    />
  ));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} {getPluralWord(offers.length, 'place')} to stay in {city.name}
        </b>
        <OffersSort
          sortTypes={SORT_TYPES}
        />
        <div className="cities__places-list places__list tabs__content">
          {cards}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          className={'cities__map map'}
          location={city.location}
          offers={offers}
          selectedOffer={activeCard}
        />
      </div>
    </div>
  );
}
export default OffersList;
