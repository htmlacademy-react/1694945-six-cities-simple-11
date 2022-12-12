import { userProcess } from './user-process';
import { checkAuthorizeAction, loginAction, logoutAction } from './api-actions';
import { UserProcess } from '../../types/state';
import { UserData } from '../../types/user-data';
import { makeFakeUserData } from '../../mocks/mocks';
import { AuthorizationStatus } from '../../const';

const fakeUserData = makeFakeUserData();

describe('Reducer: userProcess', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {} as UserData,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  describe('Action: checkAuthorizationAction', () => {
    it('should update authorizationStatus to "AUTH" and return "userData" if checkAuthorizeAction fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: checkAuthorizeAction.fulfilled.type,
          payload: fakeUserData,
        })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      });
    });

    it('should update authorizationStatus to "NO_AUTH" if checkAuthorizeAction rejected', () => {
      expect(
        userProcess.reducer(state, { type: checkAuthorizeAction.rejected.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: {},
      });
    });
  });

  describe('Action: loginAction', () => {
    it('should update authorizationStatus to "AUTH" and return "userData" if loginAction fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: loginAction.fulfilled.type,
          payload: fakeUserData,
        })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      });
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(
        userProcess.reducer(state, { type: loginAction.rejected.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: {},
      });
    });
  });

  describe('logoutAction', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(
        userProcess.reducer(state, { type: logoutAction.fulfilled.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: {},
      });
    });
  });
});
