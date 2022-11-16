import * as actionTypes from "../constants/loaderConstant.js";

const initialState = {
Loader:false,
msg:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  



    case actionTypes.START_LOAD:
      const loader = {
        ...state,
      };
      
      
      loader.Loader = true
   
      return loader;

      case actionTypes.SET_MSG:
        const msg = { 
          ...state,
        }
        msg.msg = action.data;

        return msg


      case actionTypes.STOP_LOAD:
        const stopLoad = {
          ...state,
        };
        stopLoad.Loader = false
     
        return stopLoad;











    default:
      break;
  }
  return state;
};

export default reducer;