import { configureStore } from '@reduxjs/toolkit'
import loggingReducer from './features/logIn'


const store = configureStore ({
    reducer: {
        logging: loggingReducer
    }
})

// state tracker
store.subscribe(() => {
    // console.log("!!! Nouveau state: ", store.getState())
})

export default store