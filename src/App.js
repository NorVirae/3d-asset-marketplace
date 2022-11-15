

import './styles/cssLoader'

import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';
import OpenAStore from './pages/openAStore';
import Experiment from './pages/experiment';
import BuyPage from './pages/buypage';
import Cart from './pages/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './component/sidebar/sidebar';
import User from './pages/user';
import UploadPage from './pages/upload';

function App() {

  return (
    <>
    
    <ToastContainer/>
      <RegisterProvider>
        <Routes>
          <Route path='/' element={
                <Home/>
              } exact/>
      
          <Route path='/open/store' element={<OpenAStore/>} exact />
        
          <Route path='/experiment' element={<Experiment/>} exact />
          <Route path='/buy/page' element={<BuyPage/>} exact />
          <Route path='/cart' element={<Cart/>} exact />
          <Route path='/user' element={<User />} exact />
          <Route path='/user/upload' element={<UploadPage />} exact />


        </Routes>
      </RegisterProvider>

    </>
  );
}

export default App;
