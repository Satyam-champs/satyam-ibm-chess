import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './TableList'
const TablseSection = ({ data, header }) => {

    return (
        <div className="App1">
            <Table striped bordered size="sm" variant="dark">
                <Table>
                    <thead>
                        <tr>
                            <th style={{ color: 'yellow' }}> {header}</th>
                        </tr>
                    </thead>
                </Table>
                <TableList data={data} matchDate={header} />

            </Table>

        </div>
    )
};
export default TablseSection;