import React, { memo } from 'react';
import './category_item.scss';

const CategoryItem = ({data, addTodoCart, removeFromCart}) => {
    if(data.count === undefined) data.count = 0;
    const { count, id, max } = data;
    const updateCart = (actionName) => {
        if(actionName === 'add') count < max && addTodoCart({id});
        else count && removeFromCart({id});
    }
    return (
        <div className="category-item">
            <div className="d-flex">
                <img className="mr-2" srcSet={data.image_path} alt="Category Item" />
                <div className="item-details">
                    <h5 className="font-weight-bold mt-1">{data.name}</h5>
                    <div className="d-flex justify-content-xl-between">
                        <div className="item-info">
                            <div>₹ {data.amount}</div>
                            <div className="d-flex"><span className="material-icons mr-1">schedule</span>{data.time}</div>
                        </div>
                        <div className="item-count d-flex">
                            <div className={`minus ${!count ? 'disabled': ''}`} onClick={()=>updateCart()}>-</div>
                            <div className="count" className="font-weight-bold">{count}</div>
                            <div className={`plus ${count >= max ? 'disabled': ''}`} onClick={()=>updateCart('add')}>+</div>
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

export default CategoryItem;