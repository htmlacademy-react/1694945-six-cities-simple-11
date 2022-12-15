import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { AppRoute } from '../../const';
import { makeFakeOffer } from '../../mocks/mocks';
import CardPreview from './card-preview';

const { id, previewImage, title } = makeFakeOffer();
const link = `${AppRoute.Room}/${id}`;
const history = createMemoryHistory();

describe('Component: CardPreview', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <CardPreview
            link={link}
            previewImage={previewImage}
            title={title}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('card-preview')).toBeInTheDocument();
  });
});
