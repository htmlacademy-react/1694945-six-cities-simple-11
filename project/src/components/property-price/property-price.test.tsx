import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyPrice from './property-price';

const { price } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: PropertyPrice', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyPrice price={price} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-price')).toBeInTheDocument();
  });
});
