import {store} from '../store/store';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};
