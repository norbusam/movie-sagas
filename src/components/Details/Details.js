import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    // onClick function to go back to home page
    backToMovie = () => {
        console.log('clicked');
        this.props.history.push('/');
    }
    render(){
        return(
            <>
                <p>Hello from details</p>
                <button onClick={this.backToMovie}>Back</button>
            </>
        )
    }
}

export default connect()(Details);