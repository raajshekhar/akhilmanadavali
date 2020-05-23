import React, { Component } from 'react';

class Service extends Component {
    render(){
        const { match: { params: { name } } } = this.props;
        return (
        <h1> Service: { name }</h1>
        );
    }
}

export default Service;