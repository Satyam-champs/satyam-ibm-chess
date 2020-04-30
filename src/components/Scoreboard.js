import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import TodayMatchList from './TodayMatchList'
const Scoreboard = ({data,todayDate}) => {
    
    return (
        <div className="App1">
        <Router>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Player Name</th>
              <th>Matches</th>
              <th style={{ color: 'green' }}>Win</th>
              <th style={{ color: 'red' }}>Lose</th>
              <th style={{ color: 'yellow' }}>Draw</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
          {data.map(obj => (
              <tr key = {obj.Serial}>
                {/* <td><Link to="/PlayerList" > {obj.Serial}</Link> </td> */}
                {/* <td>
                    <a href="http://www.google.com"  >
                        {obj.Player}
                    </a>
                </td> */}
                <td>{obj.Serial}</td>
                <td>{obj.Player}</td>
                <td>{obj.Matches}</td>
                <td style={{ color: 'green' }}>{obj.Win}</td>
                <td style={{ color: 'red' }}>{obj.Lose}</td>
                <td style={{ color: 'yellow' }}>{obj.Draw}</td>
                <td>{obj.Points}</td>
              </tr>
            ))}

          </tbody>
        </Table>
        <Route path="/TodayMatchList" component={TodayMatchList}/>

        </Router>
        </div>
    )
};
export default Scoreboard;