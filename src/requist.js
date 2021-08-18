import Axios from "axios" 

//user
import {
    SERVER_BASE_API,
    GET_USER_API,
    ADD_USER_API   
   
} from "./shared/apiUrls";




//getUser
export const fetchUser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)



  //postUser
export const  AddUser=(description_Service,date,adress,phone,car_description)=>
Axios.post(ADD_USER_API,{description_Service,date,adress,phone,car_description})
.then(res=>res.data)
.then(res=> window.location.reload()
); 



//deleteUser
export const deleteUser=(id)=> {
    Axios.delete(`${SERVER_BASE_API}/:${id}/delete`)
    .then(res=>res.data)
    .then(res=> window.location.reload()
    ) ;
 }


 //updadteUser
 export const updateUser=(id)=> {
    Axios.put(`${SERVER_BASE_API}/:${id}/update`)
    .then(res=>res.data)
    .then(res=> window.location.reload()
    );
  }