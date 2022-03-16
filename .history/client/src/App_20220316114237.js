import './App.css';
import Home from './pages/home';


function App() {
  return (
    <>
      <Route>
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
