import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { checkAuthorizeAction, fetchOffersAction } from './store/api-actions';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(checkAuthorizeAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);
