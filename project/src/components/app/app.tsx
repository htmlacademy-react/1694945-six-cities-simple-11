import { useEffect } from 'react';
import HistoryRouter from '../history-router/history-router';
import { Routes, Route } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { checkAuthorizeAction, fetchOffersAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorizeAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
export default App;
