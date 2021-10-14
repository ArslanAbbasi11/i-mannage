import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import style from './Alert.module.css';
import { useEffect } from 'react';
const Alert=()=> {
    var alert= useSelector(state => state.alerts?.alert);
    var [msg,setMsg]=useState();
    useEffect(()=>{
        if(alert){message();
        }
    },[alert]);
    const message=()=>{
        setMsg(msg=alert);
    }
    return (
        <div className={style.alert} >
         <span className={style.closebtn} onClick={(e)=>setMsg(msg="")}>&times;</span> 
            {msg}
        </div>
    )
}

export default Alert
