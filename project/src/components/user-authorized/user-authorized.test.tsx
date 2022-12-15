import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import UserAuthorized from './user-authorized';
import { State } from '../../types/state';
import { makeFakeUserData } from '../../mocks/mocks';
import { AuthorizationStatus } from '../../const';

const fakeUserData = makeFakeUserData();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: fakeUserData
  }
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State, AnyAction>(middlewares);

const history = createMemoryHistory();

describe('Component: UserAuthorized', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <UserAuthorized />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(`${fakeUserData.name}`)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeUserData.email}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByTestId('user-authorized')).toBeInTheDocument();
  });

  it('should dispatch action "logoutAction" if user clicks to the "Sign out" link', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <UserAuthorized />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const linkElement = screen.getByRole('link');
    await userEvent.click(linkElement);

    const actions = store.getActions();
    expect(actions[0].type).toBe('user/logout/pending');
  });
});
