import React from 'react';
import { Link } from 'react-router-dom';
import './homeProductTile.scss';

const data = [
    {
        "id": 15,
        "name": "Electricals",
        "description": "All Electrical Items are available",
        "path": "electricals",
        "status": 1,
        "image_path": "https://st3.depositphotos.com/1177973/14712/i/450/depositphotos_147124957-stock-photo-delicious-electrician-tools.jpg"
    },
    {
        "id": 16,
        "name": "Plumbing",
        "description": "All Plumbing Items are available",
        "path": "plumbing ",
        "status": 1,
        "image_path": "https://thumbs.dreamstime.com/b/plumbing-equipment-pressure-sensors-thermostat-valves-tools-94883583.jpg"
    },
    {
        "id": 17,
        "name": "Hardware",
        "description": "All Hardware Items are available",
        "path": "hardware",
        "status": 1,
        "image_path": "https://www.djevans.co.uk/wp-content/uploads/2019/06/Ironmongery-5.jpg"
    },
    {
        "id": 18,
        "name": "Solar Panels",
        "description": "Solar Panels are available",
        "path": "solarpanels",
        "status": 1,
        "image_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjS6Hk9c-FPSZ51CdpnQ2H2ou9WXSHIQLv0Q&usqp=CAU"
    }
]

const HomeProductTile = () => {

    const markup = (item) =>(
            <div className="home-product-cell" key={item.name}>
                <Link to={{ pathname: 'service/'+item.path, search:`?id=${item.id}` }}>
                    <div className="home-product-cell-img">
                        <img className="d-block" width="315" src={item.image_path} />
                    </div>
                    <div className="product-cell-title-wrapper">
                        <div className="product-cell-title">{item.name}</div>
                        <div className="product-cell-title-info">{item.description}</div>
                    </div>
                </Link>
            </div>
    )

    return (
        <div className="home-product-wrapper d-flex">
            { data.map(item => markup(item))}
        </div>
    );
};

export default React.memo(HomeProductTile);