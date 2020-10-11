import React from 'react'
import Button from '@material-ui/core/Button';
import Example from './chart1'
import Chart2 from './chart2'
import Count from './count'
import Chart3 from './chart3'
import Img from '../../Assets/images/world.png'
import { useSelector, useDispatch } from 'react-redux';
import {IndiaData,WorldData} from '../action/data'
export default function Index(){
    const dispatch= useDispatch();
    const allIndiaData = useSelector((state) => state.dataIndia);
    const{loading,error,data}=allIndiaData;
    const allWorldData = useSelector((state)=>state.dataWorld);
    const {loading_world,loading_error,dataWorld}= allWorldData;
    
    React.useEffect(()=>{
        dispatch(IndiaData())
        dispatch(WorldData())
        console.log(data)
    },[])
    return(
        <>
        <Button variant="contained" color="primary"  className="mt-3"><h2 ><em>India's Overall Covid Stat</em></h2></Button>
        
        
        <Count/>
        <Button variant="contained" color="primary" ><h2 className="mt-0"><em>India's Past 7 days Report</em></h2></Button>
        
        
        {data && dataWorld&&  (<>
            

            <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-around">
                
                <div className="col-lg-3 col-md-4 col-8  ml-2 mt-2 mb-2 card back">
                <div className="card bg-primary " style={{marginTop:"-10px"}}> <Example data={data} type="1" for="Confirmed"/></div>
                <h5>Cases Rate</h5>
                </div>
                <div className="col-lg-3 col-md-4 col-8  ml-2 mt-2 mb-2 card back">
                <div className="card bg-success " style={{marginTop:"-10px"}}><Chart2  data={data} type="2"/></div>
                
                <h5>Recovery Rate</h5>
                </div>
                <div className="col-lg-3 col-md-4 col-8   ml-2 mt-2 mb-2 card back">
                <div className="card bg-danger " style={{marginTop:"-10px"}}> <Example data={data} type="3" for="Deceased" /></div>
               
                <h5>Death Rate</h5>
                </div>
            </div>
        </div>
        <Button variant="contained" color="primary" ><h2 className="mt-0"><em>World Report</em></h2></Button>
        
        <Chart3 data={dataWorld} type="4"/>
        

                

        
        
        </>)}
       

        
        </>
    )
}