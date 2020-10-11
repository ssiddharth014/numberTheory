import {FORM_SUBMIT_REQUEST,FORM_SUBMIT_SUCCESS,FORM_SUBMIT_FAIL} from '../constants/form'
import axios from 'axios'
const Formsubmit=()=>async(dispatch)=>{
    try{
        dispatch({type : FORM_SUBMIT_REQUEST})
        // let data= axios.post('')
        dispatch({type:FORM_SUBMIT_SUCCESS,payload:"data"})
    }
    catch(err){
        dispatch({type:FORM_SUBMIT_FAIL,payload:err.message})

    }

}

export {Formsubmit}