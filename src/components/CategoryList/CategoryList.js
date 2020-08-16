import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './category-list.scss';

const data = [{id:1, name: 'Fans'},{id:2, name: 'Fans'}];
const closeMenuIcon = <span className="material-icons mt-2">menu_open</span>;

const CategoryList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { data = [] } = {...props};

  const selectCategory = (index) => {
    setSelectedIndex(index);
  }

  return (
    <ListGroup className="service-category-list">
      <div className="text-right service-category-list-sidebar d-flex justify-content-between align-items-center">
        <h3 className="ml-2">Services</h3>
        <span onClick={props.toggleSidebar}>{closeMenuIcon}</span>
      </div>
      {Array.isArray(data) && data.map((list, index) => {
        const key = index;
        return (
        <ListGroupItem key={key} className={`${selectedIndex === index ? 'active':''}`} onClick={()=>selectCategory(index)}>{list.name}</ListGroupItem>
        )
      })}
    </ListGroup>
  );

}

export default React.memo(CategoryList);