import { Loading } from './Components/LoadingRam'
import NavBar from './Components/NavBarPa';
import { Hero } from './Components/HeroRam'
import { Cupons } from './Components/CuponsRam'
import Menu from './Components/MenuViv';
import Submenu from './Components/SubmenuViv';
import { Contact } from './Components/ContactLau'
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          
          {/* <Route path='/loading' element={<Loading/>} /> 
          <Route path='/' element={<NavBar/>} />
          {/* anda ver colores, ver drop data

          <Route path='/' element={<Hero/>} />
          <Route path='/cupons' element={<Cupons/>} />
           {/* anda ver colores

          <Route path='/' element={<Menu/>} />
           <Route path='/submenu' element={<Submenu/>} />
           {/* anda ver colores, map,otros

          <Route path='/' element={<Contact/>} />
          {/* anda ver responsive no esta ajustada la altura, parte de css en index.css
          
          */}
           
          
           
      

          {/*
          <Route path='/' element={<NavBar/>} />
          <Route path='/' element={<BagDropdown/>} />

          <Route path='/' element={<Menu/>} />
          <Route path='/' element={<Hero/>} />
          <Route path='/' element={<Contact/>} />


          <Route path='/submenu' element={<Submenu/>} />
          
          
          */}

        </Routes>
      </BrowserRouter>




    </div>


  );
}

export default App
