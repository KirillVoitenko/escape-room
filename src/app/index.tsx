import React from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from './application';
import { Provider } from 'react-redux';
import store from './store';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Application />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
