import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../history-router/history-router';
import { makeFakeOffer } from '../../../mocks/mocks';
import CardPremiumMark from './card-premium-mark';

const offer = makeFakeOffer();
const offerWithPremiumMark = {
  ...offer,
  isPremium: true
};
const { isPremium } = offerWithPremiumMark;
const history = createMemoryHistory();

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          {isPremium && <CardPremiumMark />}
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-premium-mark')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
