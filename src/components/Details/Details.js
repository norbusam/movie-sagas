import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render(){
        return(
            <p>Hello from details</p>
        )
    }
}

export default connect()(Details);