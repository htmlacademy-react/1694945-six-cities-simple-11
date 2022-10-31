import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';


type AppPageProps = {
  cardsCount: number;
  cardsOnPage: number;
};

const IS_AUTHORIZED = true;

function App({ cardsCount, cardsOnPage }: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MainPage isAuthorized={IS_AUTHORIZED} cardsCount={cardsCount} cardsOnPage={cardsOnPage} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />

          <Route
            path={AppRoute.Room}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <PropertyPage isAuthorized={IS_AUTHORIZED} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
