import React, { Component } from 'react'
import Movies from './data/movies.json'
import ListItem from './components/ListItem'
import Form from './components/Form'
export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: Movies
        }
    }

    render() {
        const movieDisplay = this.state.movies.map((movie, index) => {
            return <ListItem key={index} movie={movie} />
        })
        return (
            <div className='List'>
                <Form />
                {movieDisplay}
            </div>
        )
    }
}