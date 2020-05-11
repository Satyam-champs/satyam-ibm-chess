import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablseSection from './TablseSection'
const TodayMatchList = ({ data, todayDate, dateList }) => {

    if (dateList.includes(todayDate)) {
        const indx = dateList.indexOf(todayDate)+1
        return (
            <TablseSection data={data} header={todayDate} idx={indx} />
        )
    }
    else{
    return (
        <div className="App2">
            <h1>There is No match Today </h1>
        </div>
    )
    }
};
export default TodayMatchList;