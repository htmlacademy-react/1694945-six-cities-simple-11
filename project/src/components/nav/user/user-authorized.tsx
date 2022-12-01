import { MouseEvent } from 'react';
import { AppRoute } from '../../../const';
import { logoutAction } from '../../../store/api-actions';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';

function UserAuthorized(): JSX.Element {
  const { name, email, avatarUrl } = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="header__avatar-image"
              src={avatarUrl || './img/avatar.svg'}
              width="20"
              height="20"
              alt={name || 'User avatar'}
            />
          </div>
          <span className="header__user-name user__name">
            {email || name}
          </span>
        </div>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href={AppRoute.Login}
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}
export default UserAuthorized;