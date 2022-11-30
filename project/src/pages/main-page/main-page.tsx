import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { store } from '../../store/store';
import { fetchOffersAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getSortedOffers } from '../../store/selectors';
import { CITIES } from '../../const';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import Loader from '../../components/loader/loader';
import OffersSection from '../../components/offer/offers-section';

type MainPageProps = {
  isAuthorized: boolean;
};

function MainPage({ isAuthorized }: MainPageProps): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, []);
  const offers = useAppSelector(getSortedOffers);
  const activeCity = useAppSelector((state) => state.activeCity);
  const mainClassName =
    offers.length > 0
      ? 'page page--gray page--main'
      : 'page__main page__main--index page__main--index-empty';
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
          <Cities
            cities={CITIES}
            activeCity={activeCity}
          />
        </div>
        <div className="cities">
          {
            offers.length === 0
              ? <Loader />
              :
              <OffersSection
                activeCity={activeCity}
                offers={offers}
              />
          }
        </div>
      </main>
    </div>
  );
}
export default MainPage;
