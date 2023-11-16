import { Loading } from './Components/LoadingRam'
import NavBar from './Components/Navbar/NavBarPa';
import { Hero } from './Components/HeroRam'
import { Cupons } from './Components/CuponsRam'
import Submenu from './Components/SubmenuViv';
import { Contact } from './Components/ContactLau'
import { Checkout } from './Components/CheckoutRam';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Components/MenuViv';
import Footer from './Components/Footer';
import About from './Components/About/About';
import Login from './Components/Login';
import Register from './Components/Register';

/* //import { Checkout } from './Components/CheckoutRam'; */


function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Menu/>
              <About/>
              <Contact/> 
            </>
          } />
          <Route path='/login' element={
            <>
              <Login/>
            </>
          } />
          <Route path='/register' element={
            <>
              <Register/>
            </>
          } />
          <Route path='/cupons' element={
            <>
              <Cupons />
            </>
          } />
          <Route path='/submenu' element={
            <>
              <Submenu />
            </>

          } />
          <Route path='/checkout' element={
            <>
              <Checkout />
            </>
          } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>


  );
}

export default App
