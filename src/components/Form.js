import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            year: '',
            posterImg: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder='title' onChange={this.handleChange} name='title' />
                <input placeholder='year' onChange={this.handleChange} name='year' />
                <input placeholder='Poster URL' onChange={this.handleChange} name='posterImg' />
            </div>
        )
    }
}