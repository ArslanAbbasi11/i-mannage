const initState={
    workLogs:{}
}
export const workLogs=(state =initState, action)=>{
    switch (action.type) {
        case "WORKLOGS":
            return {
                ...state,
                workLogs:action.payload
            }

        default:
            return state;
    }
}