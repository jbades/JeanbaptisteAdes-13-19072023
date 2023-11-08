import React from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/sass/_main.scss"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);