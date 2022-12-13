import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import PropertyGoods from './property-goods';

const { goods } = makeFakeOffer();
const history = createMemoryHistory();
const goodsListItems = goods.map((good) => (
  <li key={good} className='property__inside-item'>
    {good}
  </li>
));

describe('Component: PropertyGoods', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          {goodsListItems.length > 0 && (
            <PropertyGoods goods={goodsListItems} />
          )}
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-goods')).toBeInTheDocument();
    expect(screen.getByText('What\'s inside')).toBeInTheDocument();
  });
});
