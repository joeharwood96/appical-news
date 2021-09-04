import React from 'react';
import './Header.scss';
import Logo from '../../assets/Logo-Appical.png';
import { Link } from 'react-router-dom';

// Components
import Search from '../Search/Search.component';

const Header = (props) => {

    return (
        <div className='header'>
            <Link to={'/'} ><img src={Logo} alt="header-logo" className='header-logo' /></Link>
            <h1 className='header-title'>News</h1>
            <Search />
        </div>
    )
}

export default Header;
