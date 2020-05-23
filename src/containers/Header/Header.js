import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/Logo/Logo';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import './Header.scss';

const Header = () => {
    return (
        <div className="d-flex header-wrapper">
            <Link to="/" className="header-logo d-flex">
              <HeaderLogo />
              <div>Dhana Lakshmi</div>
            </Link>
          <nav className="navigation"><NavigationItems /></nav>
        </div>
    );
}

export default React.memo(Header);