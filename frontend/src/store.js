import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from './features/userProfile'


const store = configureStore ({
    reducer: {
        userProfile: userProfileReducer
    }
})

// state tracker
store.subscribe(() => {
    console.log("!!! New state: ", store.getState())
})

export default store