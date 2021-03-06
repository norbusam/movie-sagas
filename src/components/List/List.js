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

    // onClick function to bring to selected movie /details page
    handleClick = (movie) => {
        console.log('clicked', movie.id);
        this.props.dispatch({type: 'MOVIE_DETAIL', payload: movie.id})
        this.props.history.push('/details')
    }


    render(){
        return(
            <div className="main">
                    {this.props.movies.map(movie=>(
                        <div className="poster" key={movie.id}>
                            <div className="container">
                                <img onClick={()=>this.handleClick(movie)} alt={movie.title} src={movie.poster}/>
                                <h3>{movie.title}</h3>
                            </div>
                            <p>{movie.description}</p>
                        </div>
                    ))}
            </div>
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    movies: reduxStore.movies
})

export default connect(reduxStoreOnProps)(List);