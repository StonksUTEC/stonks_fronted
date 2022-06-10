import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Buy from './router/buy/Buy';
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
                        <Route path="buy" element={<Buy/>} />
                    </Routes>
                </BrowserRouter>
const root = createRoot(
    document.getElementById('root')
  );
root.render(router);