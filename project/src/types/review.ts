import { User } from './user';
export type Review = {
  id: number;
  offerId: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};
