import React from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/sass/_main.scss";
import { Provider } from "react-redux";
import store from "./store"
import App from './App';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);