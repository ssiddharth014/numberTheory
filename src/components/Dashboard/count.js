import React from 'react'
import Ok from '../../Assets/images/ok.png'
import Death from '../../Assets/images/death.png'
import Cured from '../../Assets/images/patient.png'
import { useSelector, useDispatch } from 'react-redux';
import {IndiaData} from '../action/data'
import io from 'socket.io-client';
export default function Count()
{
const dispatch= useDispatch();
const allIndiaData = useSelector((state) => state.dataIndia);
const{loading,error,data}=allIndiaData;


React.useEffect(()=>{
    
    dispatch(IndiaData())
    console.log(data)
},[])
    return(
        <>
<div className="container-fluid mt-4">
        <div className="row d-flex justify-content-around">
            
        <div className="col-lg-3 col-md-4 col-10  m-1 card display back">
            <div style={{marginTop:"-10px",height:"25vh"}}><img src={Cured} height="150"/></div>
            <div><h1 className="font-weight-light">Total Cases</h1>
            <h3 className="font-weight-light"> {data && (data.data.cases_time_series[data.data.cases_time_series.length-1].totalconfirmed)}</h3>
           
            </div>

        </div>
        <div  className="col-lg-3 col-md-4 col-10 m-1 card display back ">
            <div style={{marginTop:"-10px" ,height:"25vh"}}><img height="150" src={Ok}/></div>
            <div><h1  className="font-weight-light">  Cured</h1>
            <h3 className="font-weight-light">
            {data && (data.data.cases_time_series[data.data.cases_time_series.length-1].totalrecovered)}
            
            </h3>
             </div>
            
        </div>
        <div className="col-lg-3 col-md-4 col-10  m-1 card back display">
            <div style={{marginTop:"-10px" ,height:"25vh"}}><img height="150" src={Death}/></div>
            <div><h1  className="font-weight-light">Overall Death</h1>
            <h3 className="font-weight-light"> {data && (data.data.cases_time_series[data.data.cases_time_series.length-1].totaldeceased)}</h3></div>

        </div>

    </div>
</div>


        </>
    )
}