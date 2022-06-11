import React from 'react';
import { createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Catalogue from './router/catalogue/Catalogue';
import Dashboard from './router/dashboard/Dashboard';
import Portfolio from './router/portfolio/Portfolio';
import Signin from './router/signin/Signin';
import Signup from './router/signup/Signup';
import Order from './router/order/Order';

const router = <BrowserRouter>
                    <Routes> 
                        <Route path="/" element={<App />} />
                        // localhost:3000/signup
                        <Route path="signup" element={<Signup/>} />
<<<<<<< HEAD
                        // localhost:3000/sigin
                        <Route path="sigin" element={<Sigin/>} />
=======
                        <Route path="signin" element={<Signin/>} />
>>>>>>> d077d6df900971ac428d3fcbdb7c3ca596404af1
                        <Route path="dashboard" element={<Dashboard/>} />
                        <Route path="portfolio" element={<Portfolio/>} />
                        <Route path="order" element={<Order/>} />
                        <Route path="catalogue" element={<Catalogue/>} />
                    </Routes>
                </BrowserRouter>
const root = createRoot(
    document.getElementById('root')
  );
root.render(router);