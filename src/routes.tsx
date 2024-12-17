import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { RegisterForm } from './components/RegisterForm';
import Login from './pages/Login';
import Feed from './pages/Feed';
import MyProfile from './pages/MyProfile';
import Profile from './pages/Profile';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/feed" element={<Feed />} />
    <Route path="/my-profile/" element={<MyProfile />} />
    <Route path="/profile/:username" element={<Profile />} />
    {/* <Route path="/perfil/:id" element={<Perfil />} /> */}
  </Routes>
);

export default Rotas;
