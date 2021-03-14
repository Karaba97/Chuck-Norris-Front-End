import axios from 'axios'
import React, { Component } from 'react'



class Category extends Component {
    const 
    constructor(props) {
        super(props)
    
        this.state = {
             jokes: null
        }
    }

    componentDidMount() {
        axios
        .get(`https://api.chucknorris.io/jokes/random?category=${this.props.category}`)
        .then(response => {
            console.log(response)
            this.setState({jokes: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
              {this.jokes}  
            </div>
        )
    }
}

export default Category
