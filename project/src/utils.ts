import {
  FormatDate,
  ReviewData,
} from './const';
import { Review } from './types/review';

export const getPluralWord = (
  number: number,
  word: string
): string =>
  `${word}${number > 1 ? 's' : ''}`;

export const formatDate = (
  date: string,
  locales = FormatDate.Locale
): string =>
  new Date(date).toLocaleString(locales, {
    month: FormatDate.Month,
    year: FormatDate.Year,
  });

export const calculateRatingWidth = (rating: number): string =>
  rating <= ReviewData.RatingMax ? `${rating * ReviewData.RatingValue}%` : '0%';

export const getSortedReviews = (reviews: Review[]): Review[] => {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return reviews.length > ReviewData.ListLength
    ? sortedReviews.slice(ReviewData.ListLength)
    : sortedReviews;
};
