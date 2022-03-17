import './App.css';
import Home from ""
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
    </>
  );
}

export default App;
