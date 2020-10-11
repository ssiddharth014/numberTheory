import {DATA_INDIA_REQUEST,DATA_INDIA_SUCCESS,DATA_INDIA_FAIL,
    DATA_WORLD_REQUEST,DATA_WORLD_SUCCESS,DATA_WORLD_FAIL,SOCKET_FAIL,SOCKET_SUCCESS} from '../constants/data'
import axios from 'axios'
// import io from 'socket.io-client';
const IndiaData=()=>async(dispatch)=>{
    try{
        dispatch({type:DATA_INDIA_REQUEST})
        const data= await axios.get(`https://api.covid19india.org/data.json`)
        dispatch({type:DATA_INDIA_SUCCESS, payload:data})

    }
    catch(err)
    {
        dispatch({type:DATA_INDIA_FAIL, payload:err.message})

    }

}
const WorldData=()=>async(dispatch)=>{
    try{
        dispatch({type:DATA_WORLD_REQUEST})
        const data= await axios.get(`https://api.covid19api.com/summary`)
        console.log("hey",data)
        dispatch({type:DATA_WORLD_SUCCESS, payload:data})

    }
    catch(err)
    {
        dispatch({type:DATA_WORLD_FAIL, payload:err.message})

    }

}
const Socket_Connect=(data)=>async(dispatch)=>{
    try{
        dispatch({type:SOCKET_SUCCESS, payload:data})

    }
    catch(err)
    {
        dispatch({type:SOCKET_FAIL, payload:err.message})

    }
}

export {IndiaData,WorldData,Socket_Connect}