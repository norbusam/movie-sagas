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
                <div className="mainDetail">
                    <div className="posterDetail">
                        {this.props.details[0]&&
                        <>
                            <h3>{this.props.details[0].title}</h3>
                            <div>
                                <img alt={this.props.details[0].title} src={this.props.details[0].poster}/>
                                <p>{this.props.details[0].description}</p>
                            </div>
                        </>
                        }
                        <p>Genres:</p>
                        {this.props.details.map(movie=>(
                            <li key={movie.id}> {movie.name} </li>
                        ))}
                    </div>
                </div>
                <button className="btn" onClick={this.backToMovie}>Back To Movies</button>
            </>
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    details: reduxStore.movieDetail
})

export default connect(reduxStoreOnProps)(Details);