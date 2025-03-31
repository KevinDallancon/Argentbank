import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import Profil from '../pages/Profil/Profil.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path='/profil' element={<Profil />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App