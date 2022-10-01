import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Admin from './pages/Admin';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import HeroForm from './components/Admin/HeroForm';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<AboutMe />} />
                <Route path='portfolio' element={<PortfolioPage />} />
                <Route path='blog' element={<BlogPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='admin/*' element={<Admin />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
