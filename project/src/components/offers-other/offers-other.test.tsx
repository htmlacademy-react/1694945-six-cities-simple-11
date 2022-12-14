import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOtherOffers } from '../../mocks/mocks';
import OffersOther from './offers-other';

const history = createMemoryHistory();
const fakeOtherOffers = makeFakeOtherOffers();
const areOtherOffersAvailable = fakeOtherOffers && fakeOtherOffers.length > 0;

describe('Component: OffersOther', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          {areOtherOffersAvailable && (
            <div className='container'>
              <OffersOther offers={fakeOtherOffers} />
            </div>
          )}
        </HelmetProvider>
      </HistoryRouter>);
    expect(screen.getByTestId('offers-other')).toBeInTheDocument();
  });
});
