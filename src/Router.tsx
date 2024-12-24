// Router.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import Admin from './components/Admin.tsx';
import Contact from './components/Contact';
import References from "./components/References.tsx";
import UnitOverview from "./components/UnitOverview.tsx";

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/references" element={<References />} />
            <Route path="/unit-overview" element={<UnitOverview />} />
        </Routes>
    </Router>
);

export default AppRouter;