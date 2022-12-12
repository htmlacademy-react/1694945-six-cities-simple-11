import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import { browserHistory } from './browser-history';
import { store } from './store/store';
import { checkAuthorizeAction } from './store/user-process/api-actions';
import { fetchOffersAction } from './store/offers-process/api-actions';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthorizeAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ToastContainer />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
