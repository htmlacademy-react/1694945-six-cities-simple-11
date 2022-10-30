import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div
      style={{ margin: '100px auto', maxWidth: '500px', textAlign: 'center' }}
    >
      <h1>Error 404 — Page Not Found</h1>
      <Link to='/' style={{ textDecoration: 'underline' }}>Return to Main Page</Link>
    </div>
  );
}

export default NotFoundPage;
