import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import Profile from '../pages/Profile/Profile.jsx';
import Error404 from '../pages/Error404/Error404.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path='/profile' element={<Profile />} />
    <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App