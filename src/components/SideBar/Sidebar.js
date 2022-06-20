import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Home" Icon={HomeIcon} />
            </Link>
            <Link to="/catalogue"  style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Catalogue" Icon={SearchIcon} />
            </Link>
            <Link to="/buy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Buy" Icon={ShoppingCartIcon} />
            </Link>
            <Link to="/sell" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Sell" Icon={SellIcon} />
            </Link>
            <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Portfolio" Icon={AccountBalanceWalletIcon} />
            </Link>
            <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Orders" Icon={PostAddIcon} />
            </Link>
            <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Settings" Icon={MoreHorizIcon} />
            </Link>

        </div>
    );
}
export default Sidebar;