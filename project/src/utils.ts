import {
  FormatDate,
  Rating,
  REVIEWS_LIST_LENGTH
} from './const';
import { Offer } from './types/offer';
import { Review } from './types/review';

export const getPluralWord = (number: number, word: string): string =>
  `${word}${number > 1 ? 's' : ''}`;

export const formatDate = (date: string, locales = FormatDate.Locale): string =>
  new Date(date).toLocaleString(locales, {
    month: FormatDate.Month,
    year: FormatDate.Year,
  });

export const capitalizeString = (string: string): string =>
  `${string[0].toUpperCase()}${string.slice(1,string.length)}`;

export const getOffersByCity = (offers: Offer[], city: string): Offer[] =>
  offers.filter((offer) => offer.city.name === city);

export const orderOffersByType = (offers: Offer[], type: string) => {
  switch (type) {
    case 'Popular':
      return [...offers].sort(
        (offerA, offerB) => offerA.id - offerB.id
      );
    case 'Price: low to high':
      return [...offers].sort(
        (offerA, offerB) => offerA.price - offerB.price
      );
    case 'Price: high to low':
      return [...offers].sort(
        (offerA, offerB) => offerB.price - offerA.price
      );
    case 'Top rated first':
      return [...offers].sort(
        (offerA, offerB) => offerB.rating - offerA.rating
      );
    default:
      return [...offers];
  }
};

export const calculateRatingWidth = (rating: number): string =>
  rating <= Rating.Max ? `${rating * Rating.MultiplyValue}%` : '0%';

export const getSortedReviews = (reviews: Review[] | null): Review[] | null => {
  if(!reviews) {
    return null;
  }
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return sortedReviews.slice(0, REVIEWS_LIST_LENGTH);
};

export const getRandomInteger = (min: number, max?: number): number => {
  if(max) {
    if (min < 0 || max < 0 || min >= max){
      return -1;
    }
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return Math.floor(Math.random() * min);
};
