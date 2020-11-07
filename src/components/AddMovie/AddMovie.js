import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {
    state = {
        movies: {
            title: '',
            url: '',
            description: '',
            genre: ''
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
    }
    // a function to return take you back to homepage
    goHome = () => {
        console.log('go back');
        this.props.history.push('/')
    }



    render(){
        return(
            <>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title" onChange={(event)=>this.handleChange(event, 'title')}/>
                <label htmlFor="url">Movie Poster</label>
                <input type="text" name="url" onChange={(event)=>this.handleChange(event, 'url')}/>
                <label htmlFor="description">Movie Description</label>
                <textarea name="description"onChange={(event)=>this.handleChange(event, 'description')} ></textarea>
                <label htmlFor="genres">Genre</label>
                <select name="genres" onChange={(event)=>this.handleChange(event, 'genre')}>
                    <option value=""></option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
                <button onClick={this.addMovie}>Add Movie</button>
                <button onClick={this.goHome}>Cancel</button>
            </>
        )
    }
}

export default connect()(AddMovie);