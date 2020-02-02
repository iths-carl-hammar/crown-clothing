import React from 'react';
import {Link} from 'react-router-dom';

import { ReactComponent  as Logo } from '../../assets/crown.svg'; // this is speacial syntax om react . 

import './header.styles.scss';


const Header = () => (

    <div className="header">
        <Link classname='logo-container' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT 
            </Link>

        </div>

    </div>
);

export default Header;