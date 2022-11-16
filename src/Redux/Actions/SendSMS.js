import {PRODUCT_FAIL} from '../constants/loaderConstant.js'
import {START_LOAD,STOP_LOAD,SET_MSG} from '../constants/loaderConstant.js'

import {ERROR} from '../constants/loaderConstant.js'
import AxiosConfig from '../.././config/AxiosConfig'


export const sendSMS = (data) => async (dispatch)=>{
    try{
        dispatch({type:START_LOAD})
        await AxiosConfig.post('/sendmail',data).then((res)=>{


            console.log(res)
            dispatch({type:STOP_LOAD})
            dispatch({type:SET_MSG,data:res.data.msg});
            return res.data.msg


        }).catch((e)=>{
            dispatch({type:STOP_LOAD})
            return e
            
        })

    }catch(e){
        dispatch({type:STOP_LOAD})
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}





