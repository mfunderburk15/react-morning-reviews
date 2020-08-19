import React, {Component} from 'react'

export default class List extends Component {
    constructor(props){
        super(props)

        this.state ={
            movies: []
        }
    }

    render(){
        return(
            <div> I am the list Component </div>
        )
    }
}