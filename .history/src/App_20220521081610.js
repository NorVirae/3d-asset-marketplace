import './styles/landing.css';
import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <Dashboard <Home/>
        } exact/>
        
      </Routes>
    </>
  );
}

export default App;
