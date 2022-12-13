import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyRating from './property-rating';

const { rating } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: PropertyRating', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyRating rating={rating} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-rating')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
