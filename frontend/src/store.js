import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from './features/userProfile'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// temp-log-middleware
const actionLoggerMiddleware = store => next => action => {
    console.log('Dispatching action:', action)
    const result = next(action)
    console.log('New state:', store.getState())
    return result
}

// logout middleware
const logoutMiddleware = () => next => action => {

    next(action);
  
    if (action.type === 'userProfile/logout') {
    }
  }

// using redux-persist to secure 'localStorage'

const persistConfig = {
    key: 'root',
    storage
  }

const persistedReducer = persistReducer(persistConfig, userProfileReducer)

const store = configureStore ({
    reducer: {
        userProfile: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLoggerMiddleware, logoutMiddleware)
})

const persistor = persistStore(store)

// // state tracker
// store.subscribe(() => {
//     console.log("!!! New state: ", store.getState())
// })

export {store, persistor}