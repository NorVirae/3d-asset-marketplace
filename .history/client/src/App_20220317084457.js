import './App.css';
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import FileManager from "./pages/fileManager"

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/file/manager' element={<Login/>} exact/>
        <Route path='/login' element={<Register/>} exact/>
        <Route path='/register' element={<FileManager/>} exact/>


      </Routes>
    </>
  );
}

export default App;