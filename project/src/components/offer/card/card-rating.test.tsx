import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../history-router/history-router';
import { makeFakeOffer } from '../../../mocks/mocks';
import CardRating from './card-rating';

const { rating } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: CardRating', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <CardRating rating={rating} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-rating')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
