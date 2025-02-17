// Router.tsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import Admin from './components/Admin.tsx';
import AdminMacro from './components/admin/AdminMacro.tsx';
import AdminMeso from './components/admin/AdminMeso.tsx';
import AdminMicro from './components/admin/AdminMicro.tsx';
import SignIn from './components/admin/SignIn.tsx';
import SignUp from './components/admin/SignUp.tsx';
import Contact from './components/Contact';
import References from "./components/References.tsx";
import UnitOverview from "./components/UnitOverview.tsx";

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/admin/macro" element={<AdminMacro />} />
            <Route path="/admin/meso" element={<AdminMeso />} />
            <Route path="/admin/micro" element={<AdminMicro />} />

            <Route path="/admin/sign-in" element={<SignIn />} />
            <Route path="/admin/sign-up" element={<SignUp />} />


            <Route path="/contact" element={<Contact />} />
            <Route path="/references" element={<References />} />
            <Route path="/unit-overview" element={<UnitOverview />} />
        </Routes>
    </Router>
);

export default AppRouter;