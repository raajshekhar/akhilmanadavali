import React from 'react';
import './ShopInformation.scss';

const ShopInformation = () => {
    return (
        <article className="shop-information">
            <h1>Dhana Lakshmi Electrical & Hardware</h1>
            <p>Millions of developers rely on Stack Overflow to solve their coding problems, share siloed knowledge, and ship better code faster.</p>
        </article>
    );
};

export default React.memo(ShopInformation);