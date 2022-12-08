import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  getOffersLoadingStatus,
  getOffers,
  getActiveCity,
  getOffersLoadingError
} from '../../store/offers-process/selectors';
import { CITIES } from '../../const';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Cities from '../../components/cities/cities';
import Loader from '../../components/loader/loader';
import OffersSection from '../../components/offer/offers-section';
import ErrorScreen from '../../components/offer/error-screen/error-screen';


function MainPage(): JSX.Element {
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getActiveCity);
  const mainClassName =
    offers.length > 0
      ? 'page page--gray page--main'
      : 'page__main page__main--index page__main--index-empty';
  const hasError = useAppSelector(getOffersLoadingError);
  if (hasError) {
    return <ErrorScreen />;
  }
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      {offers.length > 0 && <HeaderSvg />}
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
