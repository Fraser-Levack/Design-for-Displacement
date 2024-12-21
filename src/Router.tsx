// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import Admin from './components/Admin.tsx';
// import Contact from './components/Contact';

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            {/*<Route path="/contact" component={Contact} />*/}
        </Routes>
    </Router>
);

export default AppRouter;