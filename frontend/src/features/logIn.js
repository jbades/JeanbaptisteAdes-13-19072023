import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
      firstName: "",
      lastName: ""
    },
    identified: false
  }

  // reducers
  const logInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers: {
        storeFirstName: (state, action) => {
          console.log("!!! store slice-reduder - state:", state, "!!! store slice-reduder - action:", action)          
          state.user.firstName = action.payload;
        },
        storeLastName: (state, action) => {
          state.user.lastName = action.payload;
        },
        storeRememberStatus: (state, action) => {
          state.identified = action.payload;
        },
    },
  });

// action creators
export const { storeFirstName, storeLastName, storeRememberStatus } = logInSlice.actions;

export default logInSlice.reducer;
