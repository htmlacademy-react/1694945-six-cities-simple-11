import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main">
        <div
          style={{ margin: '100px auto', maxWidth: '500px', textAlign: 'center' }}
        >
          <h1>Error 404 — Page Not Found</h1>
          <Link to='/' style={{ textDecoration: 'underline' }}>Return to Main Page</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
