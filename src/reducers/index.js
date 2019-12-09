let defaultState={
    items:""
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_DATA"){
        return{
            ...state,
            items:action.data.items
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;