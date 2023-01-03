
import './App.css';
import NavCont from './components/NavBar/navbar';


import { CartProvider } from './components/context/CartContext';

import {BrowserRouter, Routes , Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import '../src/asyncMock.css'
import Cart from './components/Cart/Cart';
import Chekout from './components/Chekout/Chekout';
import Gracias from './components/Gracias/GraciasPorComprar'







function App() {


  return (
    <div className="App">
     
    <CartProvider>
     <BrowserRouter >
        <NavCont/>
        <Routes>
        <Route path='/'element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId/' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId/' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/gracias' element={<Gracias/>}/>
        <Route path='/chekout' element={<Chekout/>}/>
        </Routes>
      </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;
