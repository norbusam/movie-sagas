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

    // function to bring to /details page
    handleClick = () => {
        console.log('clicked');
    }


    render(){
        return(
            <>
                <ul>
                    {this.props.movies.map(movie=>(
                        <li key={movie.id}>
                            <img onClick={this.handleClick} alt={movie.title} src={movie.poster}/>
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    movies: reduxStore.movies
})

export default connect(reduxStoreOnProps)(List);