import { State } from '../../types/state';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserData =>
  state[NameSpace.User].userData;
