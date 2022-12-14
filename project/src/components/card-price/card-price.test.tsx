import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import CardPrice from './card-price';

const { price } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: CardPrice', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <CardPrice price={price} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-price')).toBeInTheDocument();
  });
});
