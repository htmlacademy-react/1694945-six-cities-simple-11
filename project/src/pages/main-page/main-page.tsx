import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import CitiesEmpty from '../../components/cities/cities-empty';

type MainPageProps = {
  cardsCount: number;
  cardsOnPage: number;
  isAuthorized: boolean;
};

function MainPage({ cardsCount, cardsOnPage, isAuthorized }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} />
      <main
        className={
          cardsCount > 0
            ? 'page page--gray page--main'
            : 'page__main page__main--index page__main--index-empty'
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className="locations__item-link tabs__item tabs__item--active"
                  href="/"
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          {cardsCount > 0 ? (
            <Cities cardsCount={cardsCount} cardsOnPage={cardsOnPage} />
          ) : (
            <CitiesEmpty />
          )}
        </div>
      </main>
    </div>
  );
}
export default MainPage;
