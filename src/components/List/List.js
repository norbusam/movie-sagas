import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component{

    componentDidMount = () => {
        this.getMovies();
    }
    // a function to dispatch to reduxStore 
    getMovies = () => {
        console.log('hello from getMovies');
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render(){
        return(
            <p>Hello from List</p>
        )
    }
}

const reduxStoreOnProps = reduxStore => ({
    reduxStore
})

export default connect(reduxStoreOnProps)(List);