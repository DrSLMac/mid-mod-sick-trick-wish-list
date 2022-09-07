import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks'
import Form from '../Form'

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
addTrick = (newTrick) => {
  this.setState({ tricks: [...this.state.tricks, newTrick]})
}

deleteTrick= (id) => {
  const filteredTricks = this.state.tricks.filter(trick => trick.id !== id)
  this.setState({ tricks: filteredTricks })
}

  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        {!this.state.tricks.length &&
          <div>
            <h2>Gnarly dude! No tricks listed. Better get skatin!</h2>
          </div>
        }
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>
      </main>
    );
  }
}

export default App;