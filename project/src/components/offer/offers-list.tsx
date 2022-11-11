import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { SORT_TYPES, ACTIVE_SORT } from '../../const';
import OfferCard from './offer-card';
import { getPluralWord } from '../../utils';

type OffersListComponentProps = {
  offers: Offer[];
  city: City;
};

function OffersList({ offers, city }: OffersListComponentProps): JSX.Element {
  const cards = offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} />
  ));
  const sorts = SORT_TYPES.map((type) => (
    <li
      key={type}
      className={`places__option
        ${type === ACTIVE_SORT ? ' places__option--active' : ''}`}
      tabIndex={0}
    >
      {type}
    </li>
  ));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} {getPluralWord(offers.length, 'place')} to stay in {city.name}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            {sorts}
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {cards}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}
export default OffersList;