import { configureStore } from '@reduxjs/toolkit'
import loggingReducer from './features/logIn'


const store = configureStore ({
    reducer: {
        logging: loggingReducer
    }
})

// state tracker
store.subscribe(() => {
    console.log("!!! New state: ", store.getState())
})

export default store