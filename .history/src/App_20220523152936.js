import './styles/landing.css';
import './styles/app.css';

import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';
import OpenAStore from './pages/openAStore';

function App() {
  return (
    <>
      <RegisterProvider>
        <Routes>
          <Route path='/' element={
              
                <Home/>
              } exact/>

          <Route path='/open/store' element={<OpenAStore/>} exact />
          <Route path='/experiment' element={<Ex/>} exact />
        </Routes>
      </RegisterProvider>

    </>
  );
}

export default App;
