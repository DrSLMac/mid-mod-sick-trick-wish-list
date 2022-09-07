import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            obstacle: '',
            stance: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitTrick = event => {
        event.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInputs()
    }
    clearInputs = () => {
        this.setState({
            name: '',
            obstacle: '',
            stance: '',
            tutorial: ''
        })
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Trick Name'
                    name='name'
                    value={this.state.name}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Obstacle'
                    name='obstacle'
                    value={this.state.obstacle}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Stance'
                    name='stance'
                    value={this.state.stance}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Tutorial Link'
                    name='tutorial'
                    value={this.state.tutorial}
                    onChange={ event => this.handleChange(event)}
                />
                <button onClick={event => this.submitTrick(event)}>SEND IT</button>
            </form>
        )
    }
}

export default Form