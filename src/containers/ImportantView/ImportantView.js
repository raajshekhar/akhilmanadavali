import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShopInformation from '../../components/ShopInformation/ShopInformation';
import HomeProductTile from '../../components/HomeProductTile/HomeProductTile';
import { getServicesAction } from './action';
import './importantView.scss';

class ImportantView extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getServicesAction();
    }

    render(){
        return (
            <section className="important-view">
                <ShopInformation />
                <HomeProductTile />
            </section>
        );
    }
};

ImportantView.propTypes = {
    getServicesAction: PropTypes.func.isRequired
}


const mapActionToProps = dispatch => bindActionCreators({
    getServicesAction: getServicesAction
}, dispatch);

export default connect(null, mapActionToProps)(ImportantView);