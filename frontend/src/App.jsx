import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route, 
} from 'react-router-dom'
import Header from './layouts/header/Header'
import Index from './pages/index/Index'
import Footer from './layouts/footer/Footer'
import User from './pages/user-dashboard/UserDashboard'
import SignIn from './pages/signin/SignIn'
import UserAuth from './pages/user-dashboard/userAuth/UserAuth'
import SignInAuth from './pages/signin/signinAuth/SignInAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './features/userProfile'

export default function App() {

  const dispatch = useDispatch()

  // cleaning store data if rememberMe is false
  const rememberMe = useSelector((state) => state.userProfile.user.rememberMe)

  if (!rememberMe) {
    dispatch(logout())
  }

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