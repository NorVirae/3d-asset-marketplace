import './styles/landing.css';
import './styles/app.css';

import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';

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

      <Route path='open/store'
    </>
  );
}

export default App;
