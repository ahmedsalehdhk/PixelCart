import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages and components
import Home from "../src/pages/Home"
import ProductsWomen from './pages/ProductsWomen';
import ProductsMen from './pages/ProductsMen';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import ProductsKids from './pages/ProductsKids';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/women' element={<ProductsWomen />} />
          <Route path='/products/men' element={<ProductsMen />} />
          <Route path='/products/kids' element={<ProductsKids />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
