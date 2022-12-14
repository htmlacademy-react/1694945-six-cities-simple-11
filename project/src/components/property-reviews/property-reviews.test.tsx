import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer, makeFakeReviews } from '../../mocks/mocks';
import { datatype } from 'faker';
import { getSortedReviews } from '../../utils';
import PropertyReviews from './property-reviews';
import { AuthorizationStatus } from '../../const';

const { id } = makeFakeOffer();
const reviews = makeFakeReviews();
const areReviewsAvailable = reviews && reviews.length > 0;
const isAuthorized = datatype.boolean();
const authorizationStatus = isAuthorized ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
const history = createMemoryHistory();

describe('Component: PropertyReviews', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          {(areReviewsAvailable || isAuthorized) && (
            <PropertyReviews
              authorizationStatus={authorizationStatus}
              reviews={getSortedReviews(reviews)}
              selectedOffer={id}
            />
          )}
        </HelmetProvider>
      </HistoryRouter>
    );
    expect(screen.getByTestId('property-reviews')).toBeInTheDocument();
  });
});
