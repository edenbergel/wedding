import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form, Home, Login, FormSuccess, Invitation } from './components';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/invitation" element={<Invitation />} />
                <Route path="/form" element={<Form />} />
                <Route path="/form-success" element={<FormSuccess />} />
            </Routes>
        </Router>
    );
};

export default Routing;
