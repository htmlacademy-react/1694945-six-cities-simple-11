import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../history-router/history-router';
import { makeFakeOffer } from '../../../mocks/mocks';
import { Photo } from '../../../const';
import GalleryImage from './gallery-image';

const { images } = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: GalleryImage', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <GalleryImage
            src={images[0]}
            alt={`IMG_${Photo.MinNumber}`}
          />
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('gallery-image')).toBeInTheDocument();
  });
});
