import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { CITIES, ACTIVE_CITY } from '../../const';
import CitiesListItem from './cities-list-item';


const fakeState = {
  OFFERS: { activeCity: ACTIVE_CITY }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CitiesListItem', () => {
  it('should render not active item correctly', () => {
    const store = mockStore(fakeState);
    const city = CITIES[1];

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <CitiesListItem
              data={city}
              isActive={city.name === fakeState.OFFERS.activeCity.name}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('city-list-item')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(city.name)).toBeInTheDocument();
  });

  it('should render with active item class correctly', () => {
    const store = mockStore(fakeState);
    const city = ACTIVE_CITY;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <CitiesListItem
              data={city}
              isActive={city.name === fakeState.OFFERS.activeCity.name}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('city-list-item')).toBeInTheDocument();
    expect(screen.getByText(city.name)).toBeInTheDocument();
  });

  it('should dispatch action "setActiveCity" if user clicks on the link', async () => {
    const store = mockStore(fakeState);
    const city = CITIES[1];

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <CitiesListItem
              data={city}
              isActive={city.name === fakeState.OFFERS.activeCity.name}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByRole('link'));

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/setActiveCity');
  });
});
