import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './category-list.scss';

const data = [{id:1, name: 'Fans'},{id:2, name: 'Fans'}];

const CategoryList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectCategory = (index) => {
    setSelectedIndex(index);
  }

  return (
    <ListGroup className="service-category-list">
      {data.map((list, index) => {
        return (
          <ListGroupItem className={`${selectedIndex === index ? 'active':''}`} onClick={()=>selectCategory(index)}>Cras justo odio</ListGroupItem>
        )
      })}
    </ListGroup>
  );

}

export default React.memo(CategoryList);