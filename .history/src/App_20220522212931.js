import './styles/landing.css';
import './styles/app.css';

import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';
import OpenAStore from './pages/openAStore';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <RegisterProvider>
           <Home/>
        </RegisterProvider>
        } exact/>
        
      </Routes>

      <Route path='open/store' element={OpenAStore}
    </>
  );
}

export default App;
