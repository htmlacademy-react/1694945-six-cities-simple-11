import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { ACTIVE_SORT, SORT_TYPES } from '../../const';
import SortsListItem from './sorts-list-item';
import { getRandomInteger } from '../../utils';

const history = createMemoryHistory();
const type = SORT_TYPES[getRandomInteger(SORT_TYPES.length)];
const handleClick = () => void 0;

describe('Component: SortsListItem', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <SortsListItem
            type={type}
            isActive={type === ACTIVE_SORT}
            handleClick={handleClick}
          />;
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('sorts-list-item')).toBeInTheDocument();
  });
});
