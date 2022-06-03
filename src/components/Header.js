import React from 'react'
import Logo from "../img/logo.png";
import "./Header.css";

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
                Portafolio
                </div>
                <div className='header__menuitem'>
                Stocks
                </div>
                <div className='header__menuitem'>
                Trading
                </div>
                <div className='header__menuitem'>
                Learn
                </div>
            </div>
        </div>
    );
}

export default Header;