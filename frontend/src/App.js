import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Header from './layouts/header/header';
import Index from './pages/index/Index';
import Footer from './layouts/footer/footer';
import User from './pages/user/User'
import SignIn from './pages/signin/SignIn';

export default function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <section className='section__main'>
        <main>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/user" element={<User/>} />
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