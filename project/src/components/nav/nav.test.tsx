import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Nav from './nav';
import { makeFakeUserData } from '../../mocks/mocks';
import { AuthorizationStatus } from '../../const';

const fakeUserData = makeFakeUserData();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: fakeUserData
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Nav', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Nav />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });

  it('should render "user-authorized" component if user has status authorized', () => {
    const store = mockStore({
      ...fakeState,
      USER: { ...fakeState.USER, authorizationStatus: AuthorizationStatus.Auth }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Nav />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render "user-unauthorized" component if user has status unauthorized', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Nav />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
