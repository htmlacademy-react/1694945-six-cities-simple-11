import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import NoOffers from './no-offers';
import { ACTIVE_CITY } from '../../const';

const history = createMemoryHistory();

describe('Component: NoOffers', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NoOffers city={ACTIVE_CITY.name} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('no-offers')).toBeInTheDocument();
  });
});
