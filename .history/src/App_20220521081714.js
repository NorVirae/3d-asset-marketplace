import './styles/landing.css';
import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <Register>
           <Home/>
        </DashboardProvider>
        } exact/>
        
      </Routes>
    </>
  );
}

export default App;
