import { Routes, Route } from 'react-router-dom';
import AboutSettings from '../components/Admin/AboutSettings';
import HeroSettings from '../components/Admin/HeroSettings';
import Dashboard from '../components/Dashboard/Dashboard';
import Sidebar from '../components/Sidebar/Sidebar';

import './admin.css';

const Admin = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 6 }}>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='hero' element={<HeroSettings />} />
                    <Route path='about' element={<AboutSettings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
