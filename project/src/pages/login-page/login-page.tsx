import { Helmet } from 'react-helmet-async';
import HeaderSvg from '../../components/header-svg/header-svg';
import Header from '../../components/header/header';
import LoginSectionForm from '../../components/login-section-form/login-section-form';
import LoginSectionLocations from '../../components/login-section-locations/login-section-locations';

export default function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login" data-testid="login-page">
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
