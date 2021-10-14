export const createWorkLog=(token,obj)=> async (dispatch)=> {
    var date=obj.logDate;
    var hours=obj.hours;
    var desc=obj.description;
  
     const res= await fetch('http://34.210.129.167/api/work-logs', { 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization' : 'Bearer'+token
       },
       body: JSON.stringify({logDate:date,hours:hours,description:desc})  
         });
         console.log("create worklog res",res);
        
         const result= await res.json(); 
         console.log("worklog result",result);
         if(result.success===true){
            dispatch({
                type:"ALERT",
                payload:"work log created sucessfully"
              })
         }
         else{
            dispatch({
                type:"ALERT",
                payload:result.message
              })
    
         }
      /*   dispatch({
            type:"ALERT",
            payload:delResult.message
          })

         */
        
       }
   