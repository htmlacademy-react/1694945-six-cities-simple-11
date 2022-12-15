import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import HeaderSvg from './header-svg';

describe('Component: HeaderSvg', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <HeaderSvg />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByTestId('header-svg')).toBeInTheDocument();
  });
});
