import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import { AllBeersPage } from './pages/AllBeersPage';
import { BeerPage } from './pages/BeerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path='/beers/:Beer' element={<BeerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
