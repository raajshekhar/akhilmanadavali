import React from 'react';
import Address from './Address';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="d-flex">
            <Address />
            <a href="tel:9716151959">Call Now: 9716151959</a>
        </footer>
    )
};

export default React.memo(Footer);