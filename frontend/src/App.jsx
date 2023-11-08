import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route, 
} from 'react-router-dom'
import Header from './layouts/header/Header'
import Index from './pages/index/Index'
import Footer from './layouts/footer/Footer'
import User from './pages/user/User'
import SignIn from './pages/signin/SignIn'
import UserAuth from './components/userAuth/UserAuth'
import SignInAuth from './components/signinAuth/SignInAuth'
// import { useDispatch, useSelector } from 'react-redux'
// import { setFirstName, setIdentified, setLastName, setToken } from './features/userProfile'

export default function App() {

  // const dispatch = useDispatch()

  // // cleaning store data if rememberMe is false
  // const rememberMe = useSelector((state) => state.userProfile.user.rememberMe)
  // console.log("!!! rememberMe: ", rememberMe)

  // if (!rememberMe) {
  //   dispatch(setFirstName(""))
  //   dispatch(setLastName(""))
  //   dispatch(setIdentified(false))
  //   dispatch(setToken(""))
  // }

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/signin" 
          element={
            <SignInAuth>
              <SignIn/> 
            </SignInAuth>
          }
        />
        <Route 
          path="/user" 
          element={
            <UserAuth>
              <User/>
            </UserAuth>
          } 
        />
        <Route path="*" element={<Index/>} />
      </Routes>
      <Footer />  
    </Router>
  );
}