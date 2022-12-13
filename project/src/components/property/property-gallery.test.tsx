import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer } from '../../mocks/mocks';
import { Photo } from '../../const';
import GalleryImage from './gallery/gallery-image';
import PropertyGallery from './property-gallery';

const { images } = makeFakeOffer();
const history = createMemoryHistory();
const imagesListItems = images.map((image, index) => (
  <GalleryImage
    key={image}
    src={image}
    alt={`IMG_${index + Photo.MinNumber}`}
  />
));

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          {imagesListItems.length > 0 && (
            <PropertyGallery
              gallery={imagesListItems}
            />
          )}
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-gallery')).toBeInTheDocument();
  });
});
