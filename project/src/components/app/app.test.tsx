import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import App from './app';
import { makeFakeUserData, makeFakeOffers, makeFakeOffer, makeFakeOtherOffers, makeFakeReviews } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT } from '../../const';

const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();
const fakeOffer = makeFakeOffer();
const fakeOtherOffers = makeFakeOtherOffers();
const fakeReviews = makeFakeReviews();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: fakeUserData
  },
  OFFERS: {
    activeCity: ACTIVE_CITY,
    activeSort: ACTIVE_SORT,
    offers: fakeOffers,
    areOffersLoading: false
  },
  PROPERTY: {
    selectedOffer: fakeOffer,
    isSelectedOfferLoading: false,
    hasSelectedOfferLoadingError: false,
    otherOffers: fakeOtherOffers,
    reviews: fakeReviews,
    isReviewFormBlocked: false
  }
};

const mockStore = configureMockStore();
const store = mockStore(fakeState);

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigates to "/" route', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('should render "PropertyPage" when user navigates to "/offer/:id" route', () => {
    history.push(`${AppRoute.Room}/${fakeOffer.id}`);

    render(fakeApp);

    expect(screen.getByTestId('property-page')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login" route', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
