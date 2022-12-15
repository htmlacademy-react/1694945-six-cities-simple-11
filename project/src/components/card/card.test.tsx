import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeOffer } from '../../mocks/mocks';
import Card from './card';
const mockStore = configureMockStore();
const selectedOffer = makeFakeOffer();
const fakeState = {
  PROPERTY: {
    selectedOffer
  }
};

describe('Component: Card', () => {
  it('should render correctly on main page', () => {
    const className = 'cities__card place-card';
    const history = createMemoryHistory();
    const store = mockStore(fakeState);
    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Card
              className={className}
              offer={selectedOffer}
              onMouseOut={() => void 0}
              onMouseOver={() => void 0}
            />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    const articleElement = screen.getByTestId('card');
    expect(articleElement).toBeInTheDocument();
    expect(articleElement).toHaveClass('cities__card');
    expect(articleElement).not.toHaveClass('near-places__card');
  });

  it('should render correctly on property page', () => {
    const className = 'near-places__card place-card';
    const history = createMemoryHistory();
    const store = mockStore(fakeState);
    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Card
              className={className}
              offer={selectedOffer}
              onMouseOut={() => void 0}
              onMouseOver={() => void 0}
            />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );
    const articleElement = screen.getByTestId('card');
    expect(articleElement).toBeInTheDocument();
    expect(articleElement).not.toHaveClass('cities__card');
    expect(articleElement).toHaveClass('near-places__card');
  });
});
