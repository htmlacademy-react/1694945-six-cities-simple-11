import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import LoginPage from './login-page';
import { makeFakeUserData } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus, ACTIVE_CITY } from '../../const';

const fakeUserData = makeFakeUserData();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: fakeUserData
  },
  OFFERS: {
    activeCity: ACTIVE_CITY
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('should redirect to "main-page" if user status is authorized', () => {
    const store = mockStore({
      ...fakeState,
      USER: {
        ...fakeState.USER.userData,
        authorizationStatus: AuthorizationStatus.Auth
      }
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.Login}
                element={<LoginPage />}
              />
              <Route
                path={AppRoute.Main}
                element={<h1>Main page.</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Main page./i)).toBeInTheDocument();
  });
});
