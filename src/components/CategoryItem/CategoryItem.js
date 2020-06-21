import React, { memo, useState } from 'react';
import './category_item.scss';

const CategoryItem = ({data}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="category-item">
            <div className="d-flex">
                <img className="mr-2" srcSet={data.path} alt="Category Item Image" />
                <div className="item-details">
                    <h5 className="font-weight-bold mt-1">{data.name}</h5>
                    <div className="d-flex justify-content-xl-between">
                        <div className="item-info">
                            <div>₹ {data.amount}</div>
                            <div className="d-flex"><span className="material-icons mr-1">schedule</span>{data.time}</div>
                        </div>
                        <div className="item-count d-flex">
                            <div className="plus" onClick={()=>count && setCount(count-1)}>-</div>
                            <div className="count" className="font-weight-bold">{count}</div>
                            <div className="minus" onClick={()=>setCount(count+1)}>+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-description">
                <ul>
                    <li>Test</li>
                </ul>
            </div>
        </div>
    );
};

export default memo(CategoryItem);