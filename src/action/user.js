import {fetchUser,AddUser} from '../requist';
import Axios from 'axios';



//getUser
export function getUser() {
    return dispatch => {
        fetchUser()
        .then (user =>dispatch (
            {type: "GET_USER_API" ,payload: user})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
        }
    };
  


//postUser
 export const Adduser =(description_Service,date,adress,phone,car_description)=> async (dispatch)=>{
     try{
         const res =await AddUser(description_Service,date,adress,phone,car_description );
        dispatch({
        type:  "ADD_USER_API", 
        payload : res.data});
        console.log("payload");           
    } catch (error){
    console.log(error);
    }
};


//deleteUser
export const deleteUser = (id)=> async (dispatch) => {
    try {
      await deleteUser(id);
      dispatch({
        type:"SERVER_BASE_API",
        payload:id
    })
      console.log("delete")
      dispatch(deleteUser);
    } catch (error) {
      console.log(error);
    }
  };

  //updateUser
  export const updateUser = (id,description_Service,date,adress,phone,car_description) => async dispatch => {
    try {
      const res = await Axios.put(`http://localhost:4000/app/User/${id}/update`,{description_Service,date,adress,phone,car_description}) 
       
      dispatch({
        type: "SERVER_BASE_API" , 
        payload: res.data
      });
      console.log("err")
    } catch (error) {
      console.log(error);
    }
  };
    

    

