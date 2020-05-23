import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-items.scss';

const NavigationItems = () => {
    const links = [{ title: 'Home', to: '/service'}, { title: 'About Us', to: '/service'}, { title: 'Contact Us', to: '/service'}];
    return (
        <ul className="navigation-list">
            { links.map(link => <li key={link.title}><Link to={link.to}>{link.title}</Link></li>) }
        </ul>
    );
};

export default React.memo(NavigationItems);