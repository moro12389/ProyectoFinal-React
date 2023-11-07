import Menu from "./components/Menu";
//import Probando from "./components/Probando";
import Drinks from "./components/Drinks";
import East from "./components/East";
import New from "./components/New";
import Pizza from "./components/Pizza";
import Shawarma from "./components/Shawarma";
import StreetFood from "./components/StreetFood";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path='/drinks' element={<Drinks/>} />
          <Route path='/east' element={<East/>} />
          <Route path='/new' element={<New/>} />
          <Route path='/pizza' element={<Pizza/>} />
          <Route path='/shawarma' element={<Shawarma/>} />
          <Route path='/streetfood' element={<StreetFood/>} />
        </Routes>
      </BrowserRouter>
      

      
     
    </div>
    

  );
}

export default App;

