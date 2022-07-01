import React from 'react'
import Logo from "../img/logo.png";
import Stonks from "../img/s.png";

import { Link } from "react-router-dom";
import "./Header.css";
import styled from '@emotion/styled';

const ToggleItem = styled.div`
    color: white;
    font-family: Roboto;
    font-weight: bold;
    text-decoration: none;
    &::after, :active, :hover :link {
        text-decoration: none;

    }
`;

const Header = () => {
    return (
        <div className='header__wrapper'>
            {/* stonks */}
            <div className='header__stonks'>
                <img src={Stonks} alt="s" width={70} />
                <img src={Logo} alt="logo" width={100} />
            </div>
            {/* logo */}
            
            
            {/* menuitems */}
            <div className='header__menuitems'>
                {/* <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="/dashboard">
                        <ToggleItem>
                            Dashboard
                        </ToggleItem>

                    </Link>
                </div>*/}
                <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="signin">
                        <ToggleItem>
                            Sign in
                        </ToggleItem>
                    </Link>
                </div>
                <div className='header__menuitem'>
                    <Link style={{ 'textDecoration': 'none' }} to="signup">
                        <ToggleItem>
                            Sign up
                        </ToggleItem>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;