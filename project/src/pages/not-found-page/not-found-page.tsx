import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page page--gray' data-testid="not-found-page">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Header />
      <main className='page__main page__main'>
        <div
          style={{
            margin: '100px auto',
            maxWidth: '500px',
            textAlign: 'center',
          }}
        >
          <h1>Error 404 — Page Not Found</h1>
          <Link
            to='/'
            style={{ textDecoration: 'underline' }}
          >
            Return to Main Page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
