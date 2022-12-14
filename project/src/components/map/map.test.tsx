import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Map from './map';
import { makeFakeOffers } from '../../mocks/mocks';
import { ACTIVE_CITY, ACTIVE_SORT } from '../../const';

const fakeOffers = makeFakeOffers();
const fakeState = {
  OFFERS: {
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT,
    offers: fakeOffers,
    areOffersLoading: false
  }
};
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Map', () => {
  it('should render correctly map on main page', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Map
              className={'cities__map map'}
              location={fakeState.OFFERS.activeCity.location}
              offers={fakeState.OFFERS.offers}
              selectedOffer={fakeState.OFFERS.offers[0].id}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).toHaveClass('cities__map');
    expect(mapElement).not.toHaveClass('property__map');
  });

  it('should render correctly map on property page', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Map
              className={'property__map map'}
              location={fakeState.OFFERS.activeCity.location}
              offers={fakeState.OFFERS.offers}
              selectedOffer={fakeState.OFFERS.offers[0].id}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).not.toHaveClass('cities__map');
    expect(mapElement).toHaveClass('property__map');
  });
});
