import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { AppRoute } from '../../const';
import { makeFakeOffer } from '../../mocks/mocks';
import CardName from './card-name';

const { id, title } = makeFakeOffer();
const link = `${AppRoute.Room}/${id}`;
const history = createMemoryHistory();

describe('Component: CardPreview', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <CardName
            link={link}
            title={title}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-name')).toBeInTheDocument();
  });
});
