import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

enum Setting {
  CardsCount = 312,
  CardsOnPage = 6
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App cardsCount={Setting.CardsCount} cardsOnPage={Setting.CardsOnPage} />
  </React.StrictMode>,
);
