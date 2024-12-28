import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import store Redux
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Tidak butuh basename karena path root */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

