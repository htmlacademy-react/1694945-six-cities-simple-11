import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyFeatures from './property-features';

const { type, bedrooms, maxAdults } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: PropertyFeatures', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-features')).toBeInTheDocument();
  });
});
