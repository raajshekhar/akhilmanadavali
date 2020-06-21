import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import './service.scss';

const imgPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNtJmjuPtrxw9PzpShyk2DQXNk6qRjzl7myhPBzVIEZqgdgGlO&usqp=CAU';
    
const data = [
    {id: 1, name: 'One', time: 20, amount: 200, path:imgPath},
    {id: 2, name: 'Two', time: 20, amount: 200, path:imgPath}
]

class Service extends Component {
    render(){
        const { match: { params: { name } } } = this.props;
        return (
            <Container className="category-list">
                <Row>
                    <Col sm="3"> <CategoryList /> </Col>
                    <Col sm="9">
                        <div className="d-flex justify-content-xl-between">
                            <h3 className="mt-2 font-weight-bold"> Service: { name }  <span class="badge badge-light">2</span></h3>
                            <div className="mt-2 font-weight-bold">{data.length} items</div>
                        </div>
                        <Row>
                        {data.map(item => (
                                <Col sm="6">
                                    <CategoryItem data={item} />
                                </Col>
                        ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Service;