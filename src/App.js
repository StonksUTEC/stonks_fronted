import OrdersView from './views/OrdersView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import SignUpView from './views/SignUpView';
import SignInView from './views/SignInView';
import HomeView from './views/HomeView';
import PortfolioView from './views/PortfolioView';
import CatalogueView from './views/CatalogueView';
import NotFoundView from './views/NotFoundView';
import BuyView from './views/BuyView';
import SellView from './views/SellView';
import SettingsView from './views/SettingsView';
import PrivateRoute from './libs/PrivateRoute';
import UserView from './views/UserView'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView/>} />
        <Route path="signup" element={<SignUpView />} />
        <Route path="signin" element={<SignInView />} />
        {/* <Route path="home" element={<HomeView />} /> */}
        <Route path="home" element={
          <PrivateRoute children={<HomeView />}>
          </PrivateRoute>
        } />
        <Route path="user" element={
          <PrivateRoute children={<UserView />} />
        } />
        <Route path="portfolio" element={
          <PrivateRoute children={<PortfolioView />} />
        } />
        <Route path="orders" element={
          <PrivateRoute children={<OrdersView />} />
        } />
        <Route path="catalogue" element={
          <PrivateRoute children={<CatalogueView/>} />
        } />
        <Route path="buy" element={
          <PrivateRoute children={<BuyView />} />
        } />
        <Route path="sell" element={
          <PrivateRoute children={<SellView />} />
        } />
        <Route path="settings" element={
          <PrivateRoute children={<SettingsView />} />
        } />
        <Route path="*" element={<NotFoundView />} />
        {/* TODO:: Update views */}
        {/* <Route path="user" element={<User />} />
        <Route path="update" element={<Update />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
