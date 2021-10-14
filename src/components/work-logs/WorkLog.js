import React from 'react'
import { useSelector } from "react-redux";
import style from '../users/Users.module.css';

import DisplayWorkLogs from './DisplayWorkLogs';
const WorkLogs=()=> {
 
    var logs=useSelector(state => state.workLogs?.workLogs?.data);
   
return (

    
       <div className={style.wrapper}>
           <DisplayWorkLogs arr={logs}/>
       </div>
    
)
}
export default WorkLogs
