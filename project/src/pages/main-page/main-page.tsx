import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  getOffersLoadingStatus,
  getOffers,
  getActiveCity
} from '../../store/offers-process/selectors';
import { CITIES } from '../../const';
import HeaderSvg from '../../components/header-svg/header-svg';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Cities from '../../components/cities/cities';
import Loader from '../../components/loader/loader';
import OffersSection from '../../components/offers/offers';

function MainPage(): JSX.Element {
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);
  const offers = useAppSelector(getOffers);
  const areOffersAvailable = offers && offers.length > 0;
  const activeCity = useAppSelector(getActiveCity);
  const mainClassName =
    areOffersAvailable
      ? 'page page--gray page--main'
      : 'page__main page__main--index page__main--index-empty';
  return (
    <div className="page page--gray page--main" data-testid="main-page">
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      {areOffersAvailable && <HeaderSvg />}
      <Header>
        <Nav />
      </Header>
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
            areOffersLoading
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
