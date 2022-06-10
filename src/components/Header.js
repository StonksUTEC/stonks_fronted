import React from 'react'
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import styled from '@emotion/styled';

const ToggleItem = styled.div`
    color: white;
    font-family: Roboto;
    text-decoration: none;
    &::after, :active, :hover :link {
        text-decoration: none;

    }
`;

const Header = () => {
    return (
        <div className='header__wrapper'>
            {/* logo */}
            <div className='header__logo'>
                <img src={Logo} alt="logo" width={100} />
            </div>
            {/* search */}
            <div className='header__search'>
                <div className='header__searchContainer'>
                    <input placeholder='Search'></input>
                </div>
            </div>
            {/* menuitems */}
            <div className='header__menuitems'>
                <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="/dashboard">
                        <ToggleItem>
                            Dashboard
                        </ToggleItem>

                    </Link>
                </div>
                <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="sigin">
                        <ToggleItem>
                            Sigin
                        </ToggleItem>
                    </Link>
                </div>
                <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="signup">
                        <ToggleItem>
                            Signup
                        </ToggleItem>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;