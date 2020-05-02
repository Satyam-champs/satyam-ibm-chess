import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Card, CardColumns } from 'react-bootstrap'
import Scoreboard from './Scoreboard'
var cnt = 0;
var cntt = 0;
var teamList = ['A', 'B', 'C', 'D']
var A = []
var B = []
var C = []
var D = []
var fin = []
const PoolTeam = ({ data, todayDate }) => {
    const variant = ['Primary', 'Success', 'Danger', 'Warning', 'Primary', 'Success', 'Danger', 'Warning', 'Primary', 'Success', 'Danger', 'Warning', 'Primary', 'Success', 'Danger', 'Warning']
    //  cnt += 1;
    {data.map(obj => {
        const tm = obj.Team
        console.log("call hua")

        if (obj.Team === 'A') {
            A.push(obj)
        }
        else if (obj.Team === 'B') {
            B.push(obj)
        }
        else if (obj.Team === 'C') {
            C.push(obj)
        }
        else if (obj.Team === 'D') {
            D.push(obj)
        }
    })}
    fin.push(A)
    fin.push(B)
    fin.push(C)
    fin.push(D)
    return (
        <CardColumns className="cardcol">
            
            
            <Card
                bg={'Primary'.toLowerCase()}
                key={'Primary'}
                text='white bold'
            >
                <Card.Header>Group A</Card.Header>
                <Card.Body>
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr className="Player1">
                                <th>Name</th>
                                <th>Matches</th>
                                <th>Win</th>
                                <th>Lose</th>
                                <th>Draw</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        {/* {list = []} */}
                        <tbody>

                            {A.map(obj => {
                                {console.log("call huahhhh")}
                                return <tr key={obj.Serial}>
                                    <td>{obj.Player}</td>
                                    <td>{obj.Matches}</td>
                                    <td>{obj.Win}</td>
                                    <td>{obj.Lose}</td>
                                    <td>{obj.Draw}</td>
                                    <td>{obj.Points}</td>

                                </tr>
                                // }

                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Card
                bg={'Success'.toLowerCase()}
                key={'Success'}
                text='white'
            >
                <Card.Header>Group B</Card.Header>
                <Card.Body>
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr className="Player1">
                                <th>Name</th>
                                <th>Matches</th>
                                <th>Win</th>
                                <th>Lose</th>
                                <th>Draw</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        {/* {list = []} */}
                        <tbody>

                            {B.map(obj => {
                                return <tr key={obj.Serial}>
                                    
                                    <td>{obj.Player}</td>
                                    <td>{obj.Matches}</td>
                                    <td>{obj.Win}</td>
                                    <td>{obj.Lose}</td>
                                    <td>{obj.Draw}</td>
                                    <td>{obj.Points}</td>

                                </tr>
                                // }

                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Card
                bg={'Danger'.toLowerCase()}
                key={'Danger'}
                text='white'
            >
                <Card.Header>Group C</Card.Header>
                <Card.Body>
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr className="Player1">
                                <th>Name</th>
                                <th>Matches</th>
                                <th>Win</th>
                                <th>Lose</th>
                                <th>Draw</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        {/* {list = []} */}
                        <tbody>

                            {C.map(obj => {
                                return <tr key={obj.Serial}>
                                    
                                    <td>{obj.Player}</td>
                                    <td>{obj.Matches}</td>
                                    <td>{obj.Win}</td>
                                    <td>{obj.Lose}</td>
                                    <td>{obj.Draw}</td>
                                    <td>{obj.Points}</td>

                                </tr>
                                // }

                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Card
                bg={'Warning'.toLowerCase()}
                key={'Warning'}
                text='white'
            >
                <Card.Header>Group D</Card.Header>
                <Card.Body>
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr className="Player1">
                                <th>Name</th>
                                <th>Matches</th>
                                <th>Win</th>
                                <th>Lose</th>
                                <th>Draw</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        {/* {list = []} */}
                        <tbody>

                            {D.map(obj => {
                                return <tr key={obj.Serial}>
                                    {/* <td>
                                        <a href="http://www.google.com"  >
                                            {obj.Player}
                                        </a>
                                    </td> */}
                                    <td>{obj.Player}</td>
                                    <td>{obj.Matches}</td>
                                    <td>{obj.Win}</td>
                                    <td>{obj.Lose}</td>
                                    <td>{obj.Draw}</td>
                                    <td>{obj.Points}</td>

                                </tr>
                                // }

                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>


            
        </CardColumns>

    )
};
export default PoolTeam;
