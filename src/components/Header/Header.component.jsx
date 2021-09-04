import React from 'react';
import './Header.scss';
import Logo from '../../assets/Logo-Appical.png';

// Components
import Search from '../Search/Search.component';

const Header = (props) => {

    return (
        <div className='header'>
            <img src={Logo} alt="header-logo" className='header-logo' />
            <h1 className='header-title'>News</h1>
            <Search />
        </div>
    )
}

export default Header;
