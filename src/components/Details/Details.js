import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    componentDidMount = () => {
        this.getGenres()
    }

    // function to grab all the genres from the Database
    getGenres = () => {
        this.props.dispatch({type: "GET_GENRES"})
    }
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
                {this.props.details.map(movie=>(
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.poster}/>
                        <p>{movie.name}</p>
                    </div>
                    
                ))}
            </>
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    details: reduxStore.movieDetail
})

export default connect(reduxStoreOnProps)(Details);