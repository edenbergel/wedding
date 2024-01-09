import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form, Login, FormSuccess, Invitation, LandingScreen, Events, Guests } from './components';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/landing" element={<LandingScreen />} />
                <Route path="/events" element={<Events />} />
                <Route path="/invitation" element={<Invitation />} />
                <Route path="/rsvp" element={<Form />} />
                <Route path="/form-success" element={<FormSuccess />} />
                <Route path="/guests" element={<Guests />} />
            </Routes>
        </Router>
    );
};

export default Routing;
