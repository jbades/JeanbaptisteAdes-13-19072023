import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route, 
} from 'react-router-dom'
import Header from './layouts/header/Header';
import Index from './pages/index/Index';
import Footer from './layouts/footer/Footer';
import User from './pages/user/User'
import SignIn from './pages/signin/SignIn';
import UserAuth from './components/userAuth/UserAuth';
import SignInAuth from './components/signinAuth/SignInAuth';

export default function App() {

  return (
    <Router>
      <header>
        <Header />
      </header>
      <section className='section__main'>
        <main>
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
        </main>
      </section>
      <footer>
        <Footer />  
      </footer>
    </Router>
  );
}