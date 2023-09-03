import Home from './pages/Home';
import Users from './pages/Users';
import Admin from './pages/Admin.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin.jsx';
import Cart from './pages/cart.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/User' element={<Users />} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
