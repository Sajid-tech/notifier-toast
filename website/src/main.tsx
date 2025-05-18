import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotifierProvider } from '@yourusername/notifier';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotifierProvider>
      <App />
    </NotifierProvider>
  </React.StrictMode>
);