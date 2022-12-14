import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyTitle from './property-title';

const { title } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: PropertyTitle', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <PropertyTitle title={title} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-title')).toBeInTheDocument();
  });
});
