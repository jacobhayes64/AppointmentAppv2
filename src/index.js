import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Provider } from 'react-redux';
import store from './store/accountstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="827952640626-lhue8bgosjm7d7f88h5od3j2qpa6dnl9.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
   </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
