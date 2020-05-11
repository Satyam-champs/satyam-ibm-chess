import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,ListGroup } from 'react-bootstrap'
import TablseSection from './TablseSection'
const GameRule = () => {
    return (
        <div className="App4">
            <Card
                bg={'Primary'.toLowerCase()}
                key={'Primary'}
            >
  <Card.Header><h1>Game Rules & Info</h1></Card.Header>
  <ListGroup variant="flush" bg={'Primary'.toLowerCase()}>
    <ListGroup.Item action variant="info">1. All online games will be played on <a href="http://www.lichess.org">lichess</a> site. Familiarize yourself with the platform.</ListGroup.Item>
    <ListGroup.Item action variant="info">2. All Players are divided in 4 groups . Each player will get chance to play with each other in their group. </ListGroup.Item>
    <ListGroup.Item action variant="info">3. Top 2 players from each group will be advance to next round, which will be a knockout round. And threafter all winners will advance to next round (Quarterfinal,Semfinal) till final.</ListGroup.Item>
    <ListGroup.Item action variant="info">4. Game will be of classic variant with 30 minutes , and 5 seconds increment per move.</ListGroup.Item>
    <ListGroup.Item action variant="info">5. All information related to schedule, result and timing will be updated here. As well as updated in the slack or mail. </ListGroup.Item>
    <ListGroup.Item action variant="warning">6. Before starting the match , please send your Invite link to me via any channel. So that I can update here for viewers interested in watching the game can enjoy.  </ListGroup.Item>
    <ListGroup.Item action variant="info">7. Try to finish your game in stipulated time. So everybody(player,opponents & viewers) can enjoy the match hassle free. </ListGroup.Item>
    <ListGroup.Item action variant="warning">8. In case of Draw in Knockout , we will host 5 or 10 minutes blitz game to get a winner for next round, same will be apply in any conflict (ranking will be done with lowest time taken to win)</ListGroup.Item>
    <ListGroup.Item action variant="secondary">Any more Information and Rules if it comes , will be updated here and to you via communication channel. Good Luck :) </ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
};
export default GameRule;