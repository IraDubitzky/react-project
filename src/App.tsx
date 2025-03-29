import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/signInTools/Login';
import Register from './components/signInTools/Register';
import Footer from './components/Footer';
import NewCard from './components/cardVisibility/NewCard';
import { ThemeProvider } from './components/signInTools/ThemeContext';
import { useEffect, useState } from 'react';
import { decodeToken } from './services/tokenService';
import { getUserById } from './services/userService';
import { LikedCardsProvider } from './context/LikedCardsContext';
import LikedCardsPage from './components/LikedCardsPage';
import MyCards from './components/MyCards';
import EditCard from './components/cardVisibility/EditCard';
import { ToastContainer } from 'react-toastify';
import Profile from './components/Profile';




function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = decodeToken(token);
      if (!decoded._id) return;

      getUserById(decoded._id).then((res) => {
        setUser(res.data);
      });
    } catch (err) {
      console.error("Error decoding token:", err);
    }
  }, []);

  return (
    <ThemeProvider>
      <LikedCardsProvider>
        <Router>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/about' element={<About />} />
            <Route path='/liked' element={<LikedCardsPage user={user} />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/profile' element={<Profile user={user} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-card' element={<NewCard />} />
            <Route path='/my-cards' element={<MyCards />} />
            <Route path="/edit-card/:id" element={<EditCard />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-center" autoClose={3000} />
        </Router>
      </LikedCardsProvider>
    </ThemeProvider>
  );
}

export default App;
