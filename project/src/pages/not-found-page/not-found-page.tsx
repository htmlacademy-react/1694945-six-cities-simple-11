import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray" data-testid="not-found-page">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Header />
      <main className="page page--gray page--not-found-page">
        <div className="not-found-page not-found-page--div">
          <h1>Error 404 — Page Not Found</h1>
          <Link
            to='/'
            className="not-found-page not-found-page--link"
          >
            Return to Main Page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
