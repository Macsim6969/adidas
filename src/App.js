import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main, Shoes } from './components';
import UnitBlog from './components/Blog/UnitBlog';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import LoveUntits from './components/Mens/LoveUnits/LoveUntits';
import UnitDetail from './components/Mens/LoveUnits/UnitDetail';
import Mens from './components/Mens/Mens';
import MenDetails from './components/Mens/Shoes/MenDetails';
import MenShoes from './components/Mens/Shoes/MenShoes';
import { setCategory , setSort} from './redux/action/filter-action';

function App() {
  const dispatch = useDispatch()
  const onSelectCategory = (index) =>{
    dispatch(setCategory(index))
  }

  const onCSelectSortBy = (type) =>{
    dispatch(setSort(type))
  }

  
  return (
    <div className="App">
      <Header />
      <div className='App_main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/men*' element={<Mens/>}/>
          <Route path='/pride*' element={<LoveUntits/>}/>
          <Route path='/pride/:id' element={<UnitDetail />}/>
          <Route path='/shoes*' element={<Shoes category_rg={[{name:'price' ,type:'Price'}, {name:'popular', type:'Popular'}, {name:'newest', type:'Newest'}]} onCLickCategory={onSelectCategory} onClickSortBy={onCSelectSortBy} />} />
          <Route path='/cart*' element={<Cart />} />
          <Route path='/blog-unit' element={<UnitBlog/>} />
          <Route path='/men-sneakers' element={<MenShoes/>} />
          <Route path='/:id' element={<MenDetails/>} />
          <Route>404</Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
