


const user =  {
  datas : []
}
export const userReducer=(state = user, action)=>{
  const {type,payload}= action;
 
 switch(type){
   case "GET_USER_API" :
return {
 ...state,
 datas: payload,

};


case  "ADD_USER_API":
  return{
      ...state,
      datas:[ ...state.datas, payload]
  };
  case "DELETE_USER_API":
    return {
      ...state,
      datas: state.datas.filter(
        data => data._id !== payload
      )
    };
  
  case "UPDATE_USER_API":
    return {
      ...state,
      datas: state.datas.filter(
        data => data._id !== payload
      )
    }
 }
 console.log('jawk bhi', state);
  return state
}












/*export const userReducer = (state = user, action) => {
  switch (action.type){
    case "GET_USER_SUCCEDED":
      
       return action.payload
  }
  return state
};*/