import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { RegisterForm } from './components/RegisterForm';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Perfil from './pages/Perfil';
import PerfilOverview from './components/PerfilOverview';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/feed" element={<Feed />} />
    <Route path="/my-profile/" element={<Perfil />} />
    <Route path="/profile/:username" element={<PerfilOverview />} />
    {/* <Route path="/perfil/:id" element={<Perfil />} /> */}
  </Routes>
);

export default Rotas;
