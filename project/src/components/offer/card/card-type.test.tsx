import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../history-router/history-router';
import { makeFakeOffer } from '../../../mocks/mocks';
import CardType from './card-type';

const { type } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: CardPrice', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <CardType type={type} />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-type')).toBeInTheDocument();
  });
});
