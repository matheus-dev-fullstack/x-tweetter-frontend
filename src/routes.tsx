import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { RegisterForm } from './components/RegisterForm';
import Login from './pages/Login';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterForm />} />
    {/* <Route path="/perfil/:id" element={<Perfil />} /> */}
  </Routes>
);

export default Rotas;
