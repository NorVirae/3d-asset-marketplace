import './styles/landing.css';
import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <DashboardProvider>
           <Home/>
           </DashboardProvider>
        } exact/>
        
      </Routes>
    </>
  );
}

export default App;
