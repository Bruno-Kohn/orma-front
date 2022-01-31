import './styles/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.js';
import CardsPage from './cardsPage.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/cards-page/:card' element={<CardsPage />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}
