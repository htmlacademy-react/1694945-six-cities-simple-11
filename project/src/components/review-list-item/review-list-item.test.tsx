import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import { makeFakeReview } from '../../mocks/mocks';
import ReviewListItem from './review-list-item';

const review = makeFakeReview();

describe('Component: ReviewListItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <ReviewListItem
            review={review}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByTestId('review-list-item')).toBeInTheDocument();
    expect(screen.getByTestId('review-list-item')).toHaveClass('reviews__item');
  });
});
