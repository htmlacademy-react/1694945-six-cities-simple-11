import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffers } from '../../mocks/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { ACTIVE_CITY, ACTIVE_SORT } from '../../const';
import OffersSection from './offers-section';

const offers = makeFakeOffers();
const history = createMemoryHistory();
const mockStore = configureMockStore();
const fakeState = {
  OFFERS: {
    offers,
    areOffersLoading: false,
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT
  }
};
describe('Component: PropertyReviews', () => {
  const store = mockStore(fakeState);
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            {
              <OffersSection
                activeCity={fakeState.OFFERS.activeCity}
                offers={fakeState.OFFERS.offers}
              />
            }
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );
  });
});
