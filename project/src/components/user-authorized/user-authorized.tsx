import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/user-process/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getUserData } from '../../store/user-process/selectors';

function UserAuthorized(): JSX.Element {
  const { name, email, avatarUrl } = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  return (
    < >
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
      <li className="header__nav-item" data-testid="user-authorized">
        <Link
          className="header__nav-link"
          to={AppRoute.Login}
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}
export default UserAuthorized;
