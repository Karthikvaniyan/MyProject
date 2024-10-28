import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MessageProvider } from './Components/MessageContext'; // Import the context
import { AuthProvider } from './Components/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <MessageProvider>
      <AuthProvider>
      <Router>
        <App />
      </Router>
      </AuthProvider>
    </MessageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
