import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';


function App() {
  return (
    <>
      <Routes>
        <Rout path={"/"} element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
