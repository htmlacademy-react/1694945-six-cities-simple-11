import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { SORT_TYPES } from '../../const';
import { getPluralWord } from '../../utils';
import { getActiveSortType } from '../../store/offers-process/selectors';
import Card from '../card/card';
import OffersSort from '../offers-sort/offers-sort';
import Map from '../map/map';

type OffersListProps = {
  offers: Offer[];
  city: City;
};

function OffersList({ offers, city }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const className = 'cities__card place-card';
  const cards = offers.map((offer) => (
    <Card
      className={className}
      key={offer.id}
      offer={offer}
      onMouseOver={() => setActiveCard(offer.id)}
      onMouseOut={() => setActiveCard(0)}
    />
  ));
  const activeSort = useAppSelector(getActiveSortType);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} {getPluralWord(offers.length, 'place')} to stay in {city.name}
        </b>
        <OffersSort
          sortTypes={SORT_TYPES}
          activeSort={activeSort}
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
