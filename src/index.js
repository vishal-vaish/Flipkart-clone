import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./Redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-p4hejaj2e1jacd21.us.auth0.com"
    clientId="FGXxErGtD336u3hj7LYRV3GVs6knsGb6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </Auth0Provider>
  </BrowserRouter>
);

