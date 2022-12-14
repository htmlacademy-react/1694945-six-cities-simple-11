import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import OffersSort from './offers-sort';
import { makeFakeUserData, makeFakeOffers } from '../../mocks/mocks';
import { AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT, SORT_TYPES } from '../../const';

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

describe('Component: OffersSort', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OffersSort
              sortTypes={SORT_TYPES}
              activeSort={fakeState.OFFERS.activeSort}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('offers-sort')).toBeInTheDocument();
  });

  it('should dispatch action "setActiveSort" if user clicks to sort item', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OffersSort
              sortTypes={SORT_TYPES}
              activeSort={fakeState.OFFERS.activeSort}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const sortsListItems = screen.getAllByTestId('sorts-list-item');
    await userEvent.click(sortsListItems[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/setActiveSort');
  });
});
