import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import LoginSectionForm from './login-section-form';

const mockStore = configureMockStore();

describe('Component: LoginSectionForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore();

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <LoginSectionForm />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    expect(screen.getByTestId('login-section-form')).toBeInTheDocument();
  });
});
