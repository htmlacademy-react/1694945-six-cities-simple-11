import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import OffersSection from '../../components/offer/offers-section';

type MainPageProps = {
  isAuthorized: boolean;
};

function MainPage({ isAuthorized }: MainPageProps): JSX.Element {
  const cities = useAppSelector((state) => state.cities);
  const offers = useAppSelector((state) => state.offers);
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
          <Cities cities={cities} />
        </div>
        <div className="cities">
          <OffersSection offers={offers} />
        </div>
      </main>
    </div>
  );
}
export default MainPage;
