import { Component } from 'react';
import './App.css';
// import { fetchAllTricks } from '../../apiCalls'
import Tricks from '../Tricks'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [], //array of 3 objects
    }
  }

  componentDidMount = () => {
    this.fetchAllTricks()
  }

  fetchAllTricks = () => {
     fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw Error('Sick mistake. Please try again.')
      } else {
        return response.json()
      }
    })
    .then(data => { this.setState({ tricks: data })
  })
  .catch(error => console.log('Whoopsie! Big ole mistake!')
  )
}
// console.log('data: ', data[1]) 

  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </main>
    );
  }
}

export default App;