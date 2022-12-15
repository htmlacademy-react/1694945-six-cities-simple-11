import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { ACTIVE_CITY } from '../../const';
import LoginSectionLocations from './login-section-locations';

const fakeState = {
  OFFERS: { activeCity: ACTIVE_CITY }
};

const mockStore = configureMockStore();

describe('Component: LoginSectionLocations', () => {
  it('should render correctly', async () => {
    const history = createMemoryHistory();
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <LoginSectionLocations />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    expect(screen.getByTestId('login-section-locations')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/setActiveCity');
  });
});
