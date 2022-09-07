import { Component } from 'react';
import './App.css';
import { fetchAllTricks } from '../../apiCalls'
import Tricks from '../Tricks'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [], //array of 3 objects
    }
  }

  componentDidMount = () => {
    fetchAllTricks().then(data => this.setState({ tricks: data }))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks />
      </div>
    );
  }
}

export default App;