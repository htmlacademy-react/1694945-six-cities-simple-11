import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyHost from './property-host';

const { host, description } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: PropertyHost', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyHost
            host={host}
            description={description}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-host')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByAltText('Host avatar')).toBeInTheDocument();
  });

  it('should render correctly "pro" label', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyHost
            host={host}
            description={description}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });
});
