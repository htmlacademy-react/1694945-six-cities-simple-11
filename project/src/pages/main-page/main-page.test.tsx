import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import MainPage from './main-page';
import { makeFakeUserData, makeFakeOffers } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT } from '../../const';

const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: fakeUserData
  },
  OFFERS: {
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT,
    offers: fakeOffers,
    areOffersLoading: false
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('cities')).toBeInTheDocument();
  });

  it('should render "empty offer section" if there are not available offers', () => {
    const store = mockStore({
      ...fakeState,
      OFFERS: {
        ...fakeState.OFFERS,
        offers: []
      }
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('cities')).toBeInTheDocument();
    expect(screen.getByTestId('no-offers')).toBeInTheDocument();
    expect(screen.queryByTestId('offers')).not.toBeInTheDocument();
    expect(screen.queryByTestId('map')).not.toBeInTheDocument();
  });
});
