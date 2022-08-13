import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main , Cart} from './components';
import UnitBlog from './components/Blog/UnitBlog';
import Footer from './components/Footer';
import Header from './components/Header';
import LoveUntits from './components/Mens/LoveUnits/LoveUntits';
import UnitDetail from './components/Mens/LoveUnits/UnitDetail';
import Mens from './components/Mens/Mens';
import MenDetails from './components/Mens/Shoes/MenDetails';
import MenShoes from './components/Mens/Shoes/MenShoes';
import { Women } from './components/Women/Women';

function App() {
  

  
  return (
    <div className="App">
      <Header />
      <div className='App_main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/men*' element={<Mens/>}/>
          <Route path='/pride*' element={<LoveUntits/>}/>
          <Route path='/pride/:id' element={<UnitDetail />}/>
          <Route path='/cart*' element={<Cart />} />
          <Route path='/blog-unit' element={<UnitBlog/>} />
          <Route path='/men-sneakers' element={<MenShoes/>} />
          <Route path='/:id' element={<MenDetails/>} />
          <Route path='/women' element={<Women/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
