import './App.css';
import Home from "./pages/home"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/file/manager' element={<Home/>} exact/>
        <Route path='/login' element={<Home/>} exact/>
        <Route path='/regi' element={<Home/>} exact/>


      </Routes>
    </>
  );
}

export default App;
