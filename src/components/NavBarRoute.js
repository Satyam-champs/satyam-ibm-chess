import React,{Component} from 'react';
import '../App.css';
import {Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Scoreboard from './Scoreboard'
import TodayMatchList from './TodayMatchList'
import Schedule from './Schedule'
import PoolTeam from './PoolTeam'
import GameRule from './GameRule'
import Contact from './Contact'
import PlayerList from './PlayerList'

class NavBarRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
          todayDate: '',
          dateList :["4/5/2020","6/5/2020","8/5/2020"]
        }
      }
    
      componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        this.setState({
            //Setting the value of the date time
            todayDate : date + '/' + month + '/' + year,
         });
        // Tabletop.init({
        //   key: '1QFYmKMTd1oJKJXFilhJMTcKTimLUxHn6HV1D-aed9TY',
        //   callback: googleData => {
        //     this.setState({
        //       data: googleData
        //     })
        //   },
        //   simpleSheet: true
        // })
      }
    render() {
        console.log('updated state in Outer --->', this.state)
        const { dateList,todayDate } = this.state
        const { data} = this.props
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Team Group</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/TodayMatchList">Today's Match</Nav.Link>
                    <Nav.Link href="/Scoreboard">Scoreboard</Nav.Link>
                    <Nav.Link href="/Schedule">Schedule</Nav.Link>
                    <Nav.Link href="/PlayerList">PlayerWise Stats</Nav.Link>
                    <Nav.Link href="/GameRule">Rules</Nav.Link>
                    {/* <Nav.Link href="/Contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/">
                <PoolTeam data={data} todayDate={todayDate}/>
                </Route> 
                <Route exact path="/Scoreboard">
                    <Scoreboard data={data}/>
                </Route> 
                <Route path="/Schedule">
                    <Schedule data={data} dateList={dateList}/>
                </Route>
                <Route path="/TodayMatchList">
                <TodayMatchList data={data} todayDate={todayDate} dateList={dateList}/>
                </Route> 
                <Route path="/PlayerList">
                    <PlayerList/>
                </Route> 
                <Route path="/GameRule">
                    <GameRule/>
                </Route> 
                <Route path="/Contact">
                    <Contact/>
                </Route> 

            </Switch>
        </Router>
    )
};
}
export default NavBarRoute;