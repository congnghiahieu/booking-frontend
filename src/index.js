import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ScrollToTop from './components/ScrollToTop';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// if (process.env.NODE_ENV == 'production') {
//   disableReactDevTools();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path='/*'
          element={
            <GlobalStyle>
              <App />
            </GlobalStyle>
          }
        />
      </Routes>
    </Router>
  </Provider>,
);
