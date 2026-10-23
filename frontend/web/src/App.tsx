import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FondoAmbiental } from './components/FondoAmbiental';
import { Inicio } from './pages/Inicio';
import { NoEncontrada } from './pages/NoEncontrada';

export function App() {
  return (
    <BrowserRouter>
      <FondoAmbiental />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
