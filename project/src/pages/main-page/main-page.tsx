import { Helmet } from 'react-helmet-async';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import OffersList from '../../components/offer/offers-list';
import NoOffers from '../../components/offer/no-offers';
import { Offers } from '../../types/offer';
import { CITIES, ACTIVE_CITY } from '../../const';


type MainPageProps = {
  offers: Offers;
  isAuthorized: boolean;
};

function MainPage({ isAuthorized, offers }: MainPageProps): JSX.Element {
  const filteredOffers = offers.filter((offer) => offer.city.name === ACTIVE_CITY);
  const mainClassName =
    filteredOffers.length > 0
      ? 'page page--gray page--main'
      : 'page__main page__main--index page__main--index-empty';
  const citiesList = CITIES.map((city, index) => ({
    id: index + 1,
    name: city,
  })).map((city) => (
    <li key={city.id} className="locations__item">
      <a
        className={`locations__item-link tabs__item
          ${city.name === ACTIVE_CITY ? ' tabs__item--active' : ''}`}
        href="#todo"
      >
        <span>{city.name}</span>
      </a>
    </li>
  ));
  const offersList =
    offers.length > 0
      ? <OffersList offers={offers} city={ACTIVE_CITY} />
      : <NoOffers city={ACTIVE_CITY} />;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      {offers.length > 0 && <HeaderSvg />}
      <Header isAuthorized={isAuthorized} />
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {citiesList}
            </ul>
          </section>
        </div>
        <div className="cities">
          {offersList}
        </div>
      </main>
    </div>
  );
}
export default MainPage;
