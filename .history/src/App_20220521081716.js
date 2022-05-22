import './styles/landing.css';
import Home from "./pages/home"


import { Route, Routes } from 'react-router-dom';
import { RegisterProvider } from './component/auth/context/registerContext';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <RegisterProvider>
           <Home/>
        </DashboardProvider>
        } exact/>
        
      </Routes>
    </>
  );
}

export default App;
