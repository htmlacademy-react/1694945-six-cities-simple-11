import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import { CITIES, ACTIVE_CITY, ACTIVE_SORT } from '../../const';
import Cities from './cities';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeOffers } from '../../mocks/mocks';

const history = createMemoryHistory();
const offers = makeFakeOffers();
const mockStore = configureMockStore();
const fakeState = {
  OFFERS: {
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT,
    offers,
    areOffersLoading: false
  }
};
describe('Component: Loader', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Cities
              cities={CITIES}
              activeCity={ACTIVE_CITY}
            />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    expect(screen.getByTestId('cities')).toBeInTheDocument();
  });
});
