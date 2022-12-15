import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeOffers } from '../../mocks/mocks';
import { ACTIVE_CITY, ACTIVE_SORT } from '../../const';
import OffersList from './offers-list';

const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore();

const fakeState = {
  OFFERS: {
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT,
    offers: fakeOffers,
    areOffersLoading: false
  }
};

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore(fakeState);
    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <OffersList
              city={fakeState.OFFERS.activeCity}
              offers={fakeState.OFFERS.offers}
            />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    expect(screen.getByTestId('offers-list')).toBeInTheDocument();
  });
});
