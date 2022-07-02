import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { signout } from "../../connections/signoutConnection";
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Home" Icon={HomeIcon} />
            </Link>
            <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="User" Icon={AccountCircleIcon} />
            </Link>
            {/* <Link to="/catalogue"  style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Catalogue" Icon={SearchIcon} />
            </Link> */}
            <Link to="/buy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Market" Icon={ShoppingCartIcon} />
            </Link>
            {/* <Link to="/sell" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Sell" Icon={SellIcon} />
            </Link> */}
            <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Portfolio" Icon={AccountBalanceWalletIcon} />
            </Link>
            <Link to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Orders" Icon={PostAddIcon} />
            </Link>
            <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarLink text="Settings" Icon={MoreHorizIcon} />
            </Link>
            <br></br>
            <center><Button onClick={signout}variant="contained" color="error"  startIcon={<LogoutIcon />}>Sign out</Button></center>
        </div>
    );
}

export default Sidebar;
