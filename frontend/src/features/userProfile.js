import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
      firstName: "",
      lastName: "", 
      rememberMe: false
    },
    identified: false, 
    token: null
  }

  // reducers
  const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
          state.user.firstName = action.payload
        },
        setLastName: (state, action) => {
          state.user.lastName = action.payload
        },
        setRememberMe: (state, action) => {
          state.user.rememberMe = action.payload
        },
        setIdentified: (state, action) => {
          state.identified = action.payload
        },
        setToken: (state, action) => {
          state.token = action.payload
        },
        clearToken: state => {
          state.token = null
        }, 
        logout: () => {
          return initialState
        }
    },
  });

// action creators
export const { setFirstName, setLastName, setRememberMe, setIdentified, setToken, clearToken, logout } = userSlice.actions

export default userSlice.reducer;
