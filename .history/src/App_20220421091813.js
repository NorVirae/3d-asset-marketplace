import './App.css';
import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/file/manager' element={<FileManager/>} exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} exact/>
        <Route path='/video/stream' element={<VideoStream/>} exact/>
        <Route path='/test' element={<TestUpload/>}  exact/>




      </Routes>
    </>
  );
}

export default App;
