import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {
    state = {
        movies: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }
    componentDidMount = () => {
        this.getGenres()
    }

    // function to grab all the genres from the Database
    getGenres = () => {
        this.props.dispatch({type: "GET_GENRES"})
    }
    // handleChange function
    handleChange = (event, inputName) => {
        this.setState({
            movies: {
                ...this.state.movies,
                [inputName]: event.target.value
            }
        })
    }
    // onClick function to add a new movie to the DB
    addMovie = () => {
        console.log('movies added', this.state);
        if(this.state.movies.title === '' || this.state.movies.poster === '' || this.state.movies.description === ''){
          return  alert('Please fill out all fields')
        } else {
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state.movies})
        this.setState({
            movies: {
                title: '',
                poster: '',
                description: '',
                genre_id: ''
            }
        })
        this.props.history.push('/');
    }
    }
    // a function to return take you back to homepage
    goHome = () => {
        console.log('go back');
        this.props.history.push('/')
    }



    render(){
        return(
            <div>
                <div className="form">
                    <label htmlFor="Title">Title</label>
                    <input placeholder="Movie Title" type="text" name="Title" onChange={(event)=>this.handleChange(event, 'title')}/>
                    <label htmlFor="poster">Movie Poster</label>
                    <input placeholder="movie poster url" type="text" name="poster" onChange={(event)=>this.handleChange(event, 'poster')}/>
                    <label htmlFor="description">Movie Description</label>
                    <textarea placeholder="Movie description" name="description"onChange={(event)=>this.handleChange(event, 'description')} ></textarea>
                    <label htmlFor="genres">Genre</label>
                    <select name="genres" onChange={(event)=>this.handleChange(event, 'genre_id')}>
                        {this.props.genres.map(genre=>(
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                    <button className="btn" onClick={this.addMovie}>Add Movie</button>
                    <button className="btn" onClick={this.goHome}>Cancel</button>
                </div>
            </div>
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    genres: reduxStore.genres
})

export default connect(reduxStoreOnProps)(AddMovie);