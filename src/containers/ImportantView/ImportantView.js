import React from 'react';
import ShopInformation from '../../components/ShopInformation/ShopInformation';
import HomeProductTile from '../../components/HomeProductTile/HomeProductTile';
import './importantView.scss';

const ImportantView = () => {
    return (
        <section className="important-view">
            <ShopInformation />
            <HomeProductTile />
        </section>
    );
};

export default ImportantView;