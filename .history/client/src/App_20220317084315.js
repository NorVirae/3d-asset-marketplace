import './App.css';
import Home from "./pages/home"
import Home from "./pages/home"
import Home from "./pages/home"
import Home from "./pages/home"

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/file/manager' element={</>} exact/>
        <Route path='/login' element={<Home/>} exact/>
        <Route path='/register' element={<Home/>} exact/>


      </Routes>
    </>
  );
}

export default App;
