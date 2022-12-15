import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { makeFakeOffer, makeFakeOffers, makeFakeReviews } from '../../mocks/mocks';
import { datatype } from 'faker';
import { getSortedReviews } from '../../utils';
import PropertyReviews from './property-reviews';
import { AuthorizationStatus } from '../../const';

const selectedOffer = makeFakeOffer();
const otherOffers = makeFakeOffers();
const reviews = makeFakeReviews();
const areReviewsAvailable = reviews && reviews.length > 0;
const isAuthorized = datatype.boolean();
const authorizationStatus = isAuthorized ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
const history = createMemoryHistory();
const mockStore = configureMockStore();
const fakeState = {
  PROPERTY: {
    selectedOffer,
    isSelectedOfferLoading: false,
    hasSelectedOfferLoadingError: false,
    otherOffers,
    reviews,
    isReviewFormBlocked: false,
  }
};
describe('Component: PropertyReviews', () => {
  const store = mockStore(fakeState);
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            {(areReviewsAvailable || isAuthorized) && (
              <PropertyReviews
                authorizationStatus={authorizationStatus}
                reviews={getSortedReviews(fakeState.PROPERTY.reviews)}
                selectedOffer={fakeState.PROPERTY.selectedOffer.id}
              />
            )}
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('property-reviews')).toBeInTheDocument();
  });
});
