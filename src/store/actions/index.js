import axios from "axios";

export function loadData(){
    return(dispatch)=>{
        return axios.get("http://www.mocky.io/v2/5b15c4923100004a006f3c07")
        .then((response)=>{
            dispatch(getData(response.data));
        }) 
    }
}
function getData(data){
    return{
        type:"CHANGE_DATA",
        data:data
    }
}