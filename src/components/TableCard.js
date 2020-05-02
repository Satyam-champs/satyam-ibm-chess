import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import TablseSection from './TablseSection'
const TableCard = ({ data,dateList }) => {
// const dateList = ["date1","date2","date3","date4","date5"];
    return (
        
            <Table striped bordered size="sm" variant="dark">
                
                <tbody>
                {dateList.map((obj,index) => (
                    <tr>
                        <td>
                            <TablseSection data={data} header={obj} idx={index+1}/> 
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        
    )
};
export default TableCard;