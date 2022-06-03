import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './router/dashboard/Dashboard';
import Portfolio from './router/portfolio/Portfolio';
import Sigin from './router/sigin/Sigin';
import Signup from './router/signup/Signup';

const router = <BrowserRouter>
                    <Routes> 
                        <Route path="/" element={<App />} />
                        <Route path="signup" element={<Signup/>} />
                        <Route path="sigin" element={<Sigin/>} />
                        <Route path="dashboard" element={<Dashboard/>} />
                        <Route path="portfolio" element={<Portfolio/>} />
                    </Routes>
                </BrowserRouter>
ReactDOM.render(router, document.getElementById('root'));