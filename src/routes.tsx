import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { RegisterForm } from './components/RegisterForm';
import Login from './pages/Login';
import Feed from './pages/Feed';
import MyProfile from './pages/MyProfile';
import Profile from './pages/Profile';
import FeedFollowing from './pages/FeedFollowing';

const Rotas = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/" element={<Feed />} />
    <Route path="/following" element={<FeedFollowing />} />
    <Route path="/my-profile" element={<MyProfile />} />
    <Route path="/profile/:username" element={<Profile />} />
    <Route path="*" element={<Navigate to="/home" />} />

    {/* <Route path="/perfil/:id" element={<Perfil />} /> */}
  </Routes>
);

export default Rotas;
