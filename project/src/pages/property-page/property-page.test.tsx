import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import PropertyPage from './property-page';
import { State } from '../../types/state';
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

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State, AnyAction>(middlewares);

const history = createMemoryHistory();

describe('Component: PropertyPage', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    history.push(`${AppRoute.Room}/${fakeOffer.id}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <PropertyPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('property-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('property-gallery')).toBeInTheDocument();
    expect(screen.getByTestId('property-title')).toBeInTheDocument();
    expect(screen.getByTestId('property-rating')).toBeInTheDocument();
    expect(screen.getByTestId('property-price')).toBeInTheDocument();
    expect(screen.getByTestId('property-goods')).toBeInTheDocument();
    expect(screen.getByTestId('property-host')).toBeInTheDocument();
    expect(screen.getByTestId('property-reviews')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.getByTestId('offers-other')).toBeInTheDocument();
  });

  it('should render premium offer on propertyPage correctly', () => {
    fakeState.PROPERTY.selectedOffer.isPremium = true;
    const store = mockStore(fakeState);
    history.push(`${AppRoute.Room}/${fakeOffer.id}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <PropertyPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('property-premium-mark')).toBeInTheDocument();
  });
});
