import Logo from '../logo/logo';
import Nav from '../nav/nav';

type HeaderComponentProps = {
  isAuthorized?: boolean;
};

function Header({ isAuthorized }: HeaderComponentProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isAuthorized === undefined ? '' : <Nav isAuthorized={isAuthorized} />}
        </div>
      </div>
    </header>
  );
}
export default Header;
