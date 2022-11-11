import {
  LOCALE,
  FORMAT_MONTH,
  FORMAT_YEAR,
  REVIEWS_LIST_LENGTH,
  RATING_MAX,
  RATING_VALUE,
} from './const';
import { Review } from './types/review';

export const getPluralWord = (number: number, word: string): string =>
  `${word}${number > 1 ? 's' : ''}`;

export const formatDate = (date: string, locales = LOCALE): string =>
  new Date(date).toLocaleString(locales, {
    month: FORMAT_MONTH,
    year: FORMAT_YEAR,
  });

export const calculateRatingWidth = (rating: number): string =>
  rating <= RATING_MAX ? `${rating * RATING_VALUE}%` : '0%';

export const getSortedReviews = (reviews: Review[]): Review[] => {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return reviews.length > REVIEWS_LIST_LENGTH
    ? sortedReviews.slice(REVIEWS_LIST_LENGTH)
    : sortedReviews;
};
