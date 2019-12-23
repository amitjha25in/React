import React, { Component } from 'react';
import Data from '././Data/Data';

class People extends Component {
    state = {
        peopleName: '';
    }


    componentWillMount()={
    this.setState({
        peopleName: Data
    })
}

render() {
    return (
        <>
            People
            </>
    );
}
}

export default People;
