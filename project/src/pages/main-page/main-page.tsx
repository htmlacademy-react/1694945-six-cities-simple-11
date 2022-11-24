import { Helmet } from 'react-helmet-async';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import OffersList from '../../components/offer/offers-list';
import NoOffers from '../../components/offer/no-offers';
import Locations from '../../components/locations/locations';
import { Offer } from '../../types/offer';

import { ACTIVE_CITY } from '../../const';

type MainPageProps = {
  offers: Offer[];
  isAuthorized: boolean;
};

function MainPage({ isAuthorized, offers }: MainPageProps): JSX.Element {
  const filteredOffers = offers.filter((offer) => offer.city.name === ACTIVE_CITY.name);
  const mainClassName =
    filteredOffers.length > 0
      ? 'page page--gray page--main'
      : 'page__main page__main--index page__main--index-empty';
  const offersList =
    offers.length > 0
      ? <OffersList offers={offers} city={ACTIVE_CITY} />
      : <NoOffers city={ACTIVE_CITY.name} />;
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
          <Locations />
        </div>
        <div className="cities">
          {offersList}
        </div>
      </main>
    </div>
  );
}
export default MainPage;
