let defaultState={
    items:"",
    subTotal:"",
    shippingTotal:"",
    discount:"",
    total:""
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_DATA"){
        return{
            ...state,
            items:action.data.items,
            subTotal:action.data.subTotal,
            shippingTotal:action.data.shippingTotal,
            discount:action.data.discount,
            total:action.data.total
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;