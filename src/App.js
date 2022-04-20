import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import { AllBeersPage } from './pages/AllBeersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AllBeers" element={<AllBeersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
