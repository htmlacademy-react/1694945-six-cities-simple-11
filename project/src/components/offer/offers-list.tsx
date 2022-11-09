import { Offers } from '../../types/offer';
import { SORT_TYPES, ACTIVE_SORT } from '../../const';
import OfferCard from './offer-card';

type OffersListComponentProps = {
  offers: Offers;
  city: string;
};

function OffersList({ offers, city }: OffersListComponentProps): JSX.Element {
  const cardsList = offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} />
  ));
  const sortList = SORT_TYPES.map((type, index) => ({
    id: index + 1,
    value: type,
  })).map((type) => (
    <li
      key={type.id}
      className={`places__option
        ${type.value === ACTIVE_SORT ? ' places__option--active' : ''}`}
      tabIndex={0}
    >
      {type.value}
    </li>
  ));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {city}
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
            {sortList}
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {cardsList}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}
export default OffersList;
