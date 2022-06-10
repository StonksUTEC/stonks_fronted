import React from 'react';
import { createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Buy from './router/buy/Buy';
import Dashboard from './router/dashboard/Dashboard';
import Portfolio from './router/portfolio/Portfolio';
import Sigin from './router/sigin/Sigin';
import Signup from './router/signup/Signup';
import Order from './router/order/Order';

const router = <BrowserRouter>
                    <Routes> 
                        <Route path="/" element={<App />} />
                        <Route path="signup" element={<Signup/>} />
                        <Route path="sigin" element={<Sigin/>} />
                        <Route path="dashboard" element={<Dashboard/>} />
                        <Route path="portfolio" element={<Portfolio/>} />
                        <Route path="buy" element={<Buy/>} />
                        <Route path="order" element={<Order/>} />
                    </Routes>
                </BrowserRouter>
const root = createRoot(
    document.getElementById('root')
  );
root.render(router);