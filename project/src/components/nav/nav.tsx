import { AppRoute } from '../../const';

type NavProps = {
  isAuthorized: boolean;
};

function Nav({ isAuthorized }: NavProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorized ? (
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper" />
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </div>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href={AppRoute.Login}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <a
              className="header__nav-link header__nav-link--profile"
              href={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Nav;
