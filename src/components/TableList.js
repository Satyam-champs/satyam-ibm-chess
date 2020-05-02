import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

var list = ["-"]

const TableList = ({ data, matchDate, indx }) => {



    //   componentDidMount() {
    // //   {this.state.data1.map(obj => ( 
    // //       this.setState({ myArray: [...this.state.myArray, {ser: obj.Serial}] })
    // //   ))}
    //   console.log(this.state.data1)
    // };


    // console.log('updated state in Outer --->', this.props)
    // const { data } = this.props
    list = ["-"]
    return (

        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr className="PlayerHeader">
                    <th> Player1</th>
                    <th> Result</th>
                    <th> Player2</th>
                    <th> Game Link</th>
                </tr>
            </thead>
            {/* {list = []} */}
            <tbody>

                {data.map(obj => {
                    // console.log(this.state.count)
                    // console.log("*********"+list)
                    if (!list.includes(obj[matchDate])) {
                        list.push(obj.Player) 
                        list.push(obj[matchDate]) 
                        console.log("index"+indx+"  "+obj["result"+indx]+"  "+obj[matchDate]+"  "+obj.Player)
                        return <tr key={obj.Serial}>
                            <td className="Player1"> {obj[matchDate]}</td>
                            <td> {obj["result"+indx]}</td>
                            <td className="Player2"> {obj.Player}</td>
                            <td> <a href={obj["link"+indx]}>{obj["link"+indx]}</a></td>

                            {/* {this.state.count += 1} */}
                            {/* {this.setState(state => {
                                        const list = state.list.concat(state.value);
                                        const count = state.count+1
                                        return {
                                            list,
                                            count,
                                        };
                                    })} */}
                            {/* {this.handleIncrement(obj.Player)} */}
                            {/* {console.log('myArray --->', this.state.myArray)} */}
                        </tr>
                    }
                    // return <h1>No data found</h1>

                })}
            </tbody>
        </Table>

    )

};
export default TableList;