import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import TableCard from './TableCard'
const Schedule = ({ data,dateList }) => {

    return (
        <div className="App1 cardcol">
            <Table>
            <thead>
                    <tr>
                        <th style={{ color: 'white' }}> Match Schedule </th>
                    </tr>
            </thead>
            </Table>
            <TableCard data={data} dateList={dateList}/> 
        </div>
    )
};
export default Schedule;