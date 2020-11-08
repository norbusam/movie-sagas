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
                        <option value=""></option>
                        <option value={1}>Adventure</option>
                        <option value={2}>Animated</option>
                        <option value={3}>Biographical</option>
                        <option value={4}>Comedy</option>
                        <option value={5}>Disaster</option>
                        <option value={6}>Drama</option>
                        <option value={7}>Epic</option>
                        <option value={8}>Fantasy</option>
                        <option value={9}>Musical</option>
                        <option value={10}>Romantic</option>
                        <option value={11}>Science Fiction</option>
                        <option value={12}>Space-Opera</option>
                        <option value={13}>Superhero</option>
                    </select>
                    <button className="btn" onClick={this.addMovie}>Add Movie</button>
                    <button className="btn" onClick={this.goHome}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default connect()(AddMovie);