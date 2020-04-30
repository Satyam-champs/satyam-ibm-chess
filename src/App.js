
import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarRoute from './components/NavBarRoute'
import Header from './components/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1QFYmKMTd1oJKJXFilhJMTcKTimLUxHn6HV1D-aed9TY',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    console.log('updated state --->', this.state)
    const { data } = this.state
    return (
      <div className="App">
        <Header headerText="Chess Tournament ScoreBoard"/>
        <NavBarRoute data={data}/>
      </div>
    );
  };
}

export default App;
