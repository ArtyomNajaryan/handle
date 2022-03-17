import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router'
import { Menu } from './Components/Menu';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';
import { Footer } from './Components/Footer';
import { Shop } from './Components/Shop';
import { Contuct } from './Components/Contuct';
import { Single } from './Components/Single';
import { Error } from './Components/Error';
import ScrollToTop from './Components/ScrollToTop';
import { Checkout } from './Components/Checkout';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='*' element={<Error/>} /> 
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/contuct' element={<Contuct />} />
          <Route exact path='/single' element={<Single />} />
          <Route exact path='/checkout' element={<Checkout />} />
           

        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
