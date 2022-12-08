import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import UserAuthorized from './user/user-authorized';
import UserUnauthorized from './user/user-unauthorized';

function Nav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {(authorizationStatus === AuthorizationStatus.Auth) ? (
          <UserAuthorized />
        ) : (
          <UserUnauthorized />
        )}
      </ul>
    </nav>
  );
}
export default Nav;
