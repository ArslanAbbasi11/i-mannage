

export const fetchData= (category,token,load)=>async (dispatch)=> {
    
  switch (category) {
      case "USERS":
    try{
        const usersRes= await fetch(`http://34.210.129.167/api/users?page=${load}`, { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer'+token
            },
              });
              const resultUsers= await usersRes.json(); 
              console.log("got users ",resultUsers);
              dispatch({
                type:"USERS",
                payload:resultUsers
            });
          }
          catch{ dispatch({
            type:"USERS",
            payload:"something wentr wrong"
        });

          }
              break;

              case "WORKLOGS":
                try{
                const logRes= await fetch(`http://34.210.129.167/api/user/${load}/work-logs`, { 
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization' : 'Bearer'+token
                    },
                      });
                      const resultWorkLogs= await logRes.json(); 
                      console.log("got work logs ",resultWorkLogs);
                      dispatch({
                        type:"WORKLOGS",
                        payload:resultWorkLogs.workLogs
                    });
                  }
                  catch{
                    dispatch({
                      type:"WORKLOGS",
                      payload:"something went wrong"
                  });
                  }
                      break;
      default:
          break;
  }

}
