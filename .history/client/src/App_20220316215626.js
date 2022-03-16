import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
