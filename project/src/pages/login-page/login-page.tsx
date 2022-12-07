import { Helmet } from 'react-helmet-async';
import HeaderSvg from '../../components/header/header-svg';
import Header from '../../components/header/header';
import LoginSectionForm from '../../components/login/login-section-form';
import LoginSectionLocations from '../../components/login/login-section-locations';

export default function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <HeaderSvg />
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginSectionForm />
          <LoginSectionLocations />
        </div>
      </main>
    </div>
  );
}
