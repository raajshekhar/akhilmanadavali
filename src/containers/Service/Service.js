import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { getCategoryServiceItems, getCartAmount } from '../ShoppingPage/reducer';
import { addTodoCart, removeFromCart } from '../ShoppingPage/action';
import ContinueToastr from '../../components/BottomContinueToastr';
import './service.scss';

const menuIcon = <span className="material-icons">menu</span>;
const closeMenuIcon = <span className="material-icons">menu_open</span>;

class Service extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }

    toggleSidebar = () => this.setState(prevState => ({sidebarOpen: !prevState.sidebarOpen}))

    render(){
        const { match: { params: { name } }, categoryServiceItems, addTodoCart, removeFromCart, cartAmount } = this.props;

        const { sidebarOpen } = this.state;
        return (
            <Container className="category-list">
                <Row>
                    <Col sm="3" className={`sidebar ${sidebarOpen ? 'opened':'closed'}`}> <CategoryList  toggleSidebar={this.toggleSidebar} /> </Col>
                    <Col sm="9" className="list-content">
                        <div className="d-flex justify-content-between">
                            <h3 className="mt-2 font-weight-bold"><span className="menu-icon-wrapper mr-2" onClick={this.toggleSidebar}>{sidebarOpen ? closeMenuIcon : menuIcon}</span> Service: { name }  <span className="badge badge-light">2</span></h3>
                            <div className="mt-2 font-weight-bold">{categoryServiceItems.length} items</div>
                        </div>
                        <Row>
                        {categoryServiceItems.map((item, index) => {
                            const key = index;
                            return (
                                <Col sm="6" key={key}>
                                    <CategoryItem data={item} addTodoCart={addTodoCart} removeFromCart={removeFromCart} />
                                </Col>
                                )
                        })}
                        </Row>
                    </Col>
                </Row>
                {cartAmount ? <ContinueToastr value={cartAmount} /> : null}
            </Container>
        );
    }
}

Service.propTypes = {
    categoryServiceItems: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    categoryServiceItems: getCategoryServiceItems(state),
    cartAmount: getCartAmount(state)
})

const mapActionToProps = dispatch => bindActionCreators({
    addTodoCart: addTodoCart,
    removeFromCart: removeFromCart
}, dispatch);

export default connect(mapStateToProps, mapActionToProps)(Service);