

import './styles/cssLoader'

import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';
import OpenAStore from './pages/openAStore';
import Experiment from './pages/experiment';
import BuyPage from './pages/buypage';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <RegisterProvider>
        <Routes>
          <Route path='/' element={
              
                <Home/>
              } exact/>
      <section className="landing__main-app">

          <Sidebar />
          <Route path='/open/store' element={<OpenAStore/>} exact />
          
          <Route path='/experiment' element={<Experiment/>} exact />
          <Route path='/buy/page' element={<BuyPage/>} exact />
          <Route path='/cart' element={<Cart/>} exact />


        </Routes>
      </RegisterProvider>

    </>
  );
}

export default App;
