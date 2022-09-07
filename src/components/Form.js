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

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
        console.log("form this.state: ", this.state)
    }

    submitTrick = (event) => {
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
            <form onSubmit={this.submitTrick}>
                <select
                    className='drop-down'
                    name='stance' 
                    value={this.state.stance} 
                    placeholder='Choose Your Stance'
                    onChange={this.handleChange}>
                        <option disabled value=''>Choose Your Stance</option>
                        <option value='Regular'>Regular</option>
                        <option value='Switch'>Switch</option>
                </select>
                <input 
                    type='text'
                    placeholder='Trick Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <select
                    className='drop-down'
                    name='obstacle' 
                    value={this.state.obstacle} 
                    placeholder='Choose Your Obstacle'
                    onChange={this.handleChange}>
                        <option disabled value=''>Choose Your Obstacle</option>
                        <option value='Flatground'>Flatgroud</option>
                        <option value='Ledge'>Ledge</option>
                        <option value='Rail'>Rail</option>
                        <option value='Stairs'>Stairs</option>
                        <option value='Pool'>Pool</option>
                </select>
                <input 
                    type='text'
                    placeholder='Link to Tutorial'
                    name='tutorial'
                    value={this.state.tutorial}
                    onChange={this.handleChange}
                />
                <button className='send-button'>SEND IT</button>
            </form>
        )
    }
}

export default Form