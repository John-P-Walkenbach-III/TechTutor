import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Import Firebase services for their side-effects to ensure they are registered.
import 'firebase/auth';
import 'firebase/firestore';

import { AuthProvider } from './context/AuthContext.jsx';
import { ProgressProvider } from './context/ProgressContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);