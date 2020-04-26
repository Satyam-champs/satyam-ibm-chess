
import React, { Component } from 'react';
import logo from './iem.gif';
import chess from './chess.gif';
import './App.css';
import Tabletop from 'tabletop';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <header className="App-header">
        <header className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={chess} className="App-logo" alt="chess" />
          </header>
          <h1 className="App-title">
          Chess Tournament ScoreBoard</h1>
        </header>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Player Name</th>
              <th>Matches</th>
              <th>Win</th>
              <th>Lose</th>
              <th>Draw</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
          {data.map(obj => (
              <tr key = {obj.Serial}>
                <td>{obj.Serial}</td>
                <td>{obj.Player}</td>
                <td>{obj.Matches}</td>
                <td>{obj.Win}</td>
                <td>{obj.Lose}</td>
                <td>{obj.Draw}</td>
                <td>{obj.Points}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    );
  };
}

export default App;
