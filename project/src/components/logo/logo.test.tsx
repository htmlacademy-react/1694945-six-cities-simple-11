import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import Logo from './logo';

describe('Component: Loader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Logo />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
  });
});
