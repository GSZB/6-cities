import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offersMocks } from './mocks/offers';
import { store } from './store/store';
import { Provider } from 'react-redux';


const Setting = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersCount={Setting.OFFERS_COUNT}
        offers={offersMocks}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

