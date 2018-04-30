import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import OnfidoField from './OnfidoField'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <OnfidoField onfidoToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoic045VVJrWjlJb2IvTGdLckpmNlVzMUhJRzc4bVFIZG52M09oL2d6dGE0L0NmT2VHRTQ5QzF1QTFwK3NrXG5QK3MyK2pCUWluVEtuYVBoMk4ya2JZakd0UVNoWTl1d3lKcVJMZno1L3BzK3FLNGQ3NVFFMXo2NU1YMHNcbjdpSURwa0cwXG4iLCJ1dWlkIjoiUFM4RUYyNW5mR0EiLCJleHAiOjE1MjQ2OTY2NjV9.UnQ8nGT3NWutBrygZAHk99NN3gKJ-Dmrwbs7RUGVtHA" />
        </div>
      </div>
    )
  }
}

export default App
