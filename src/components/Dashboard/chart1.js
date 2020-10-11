import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import {IndiaData} from '../action/data'



export default function Example(props) {

const dispatch= useDispatch(props);
const allIndiaData = useSelector((state) => state.dataIndia);
//const{loading,error,data}=allIndiaData;
const [update,setupdate]= React.useState()
React.useEffect(()=>{
        
        console.log(props)
        setupdate(props.data.data.cases_time_series)
        console.log(update)
    },[update])
    if(update && props.type=="1"){
        var data = [
            {
            name:`${update[update.length-1].date}`, uv:33, Confirmed:`${update[update.length-1].dailyconfirmed}` , amt: 2400,
            },
            {
              name: `${update[update.length-2].date}`, uv: 3000, Confirmed: `${update[update.length-2].dailyconfirmed}`, amt: 2210,
            },
            {
              name: `${update[update.length-3].date}`, uv: 2000, Confirmed:`${update[update.length-3].dailyconfirmed}`, amt: 2290,
            },
            {
            name:`${update[update.length-4].date}`, uv:33, Confirmed:`${update[update.length-4].dailyconfirmed}` , amt: 2400,
            },
            {
                name: `${update[update.length-5].date}`, uv: 3000, Confirmed: `${update[update.length-5].dailyconfirmed}`, amt: 2210,
            },
            {
                name: `${update[update.length-6].date}`, uv: 2000, Confirmed:`${update[update.length-6].dailyconfirmed}`, amt: 2290,
            },
            {
                name: `${update[update.length-7].date}`, uv: 2000, Confirmed:`${update[update.length-7].dailyconfirmed}`, amt: 2290,
            },
            
          ];
    }
    else if(update && props.type=="3"){
        var data = [
            {
            name:`${update[update.length-1].date}`, uv:33, Deceased:`${update[update.length-1].dailydeceased}` , amt: 2400,
            },
            {
              name: `${update[update.length-2].date}`, uv: 3000, Deceased: `${update[update.length-2].dailydeceased}`, amt: 2210,
            },
            {
              name: `${update[update.length-3].date}`, uv: 2000, Deceased:`${update[update.length-3].dailydeceased}`, amt: 2290,
            },
            {
            name:`${update[update.length-4].date}`, uv:33, Deceased:`${update[update.length-4].dailydeceased}` , amt: 2400,
            },
            {
                name: `${update[update.length-5].date}`, uv: 3000, Deceased: `${update[update.length-5].dailydeceased}`, amt: 2210,
            },
            {
                name: `${update[update.length-6].date}`, uv: 2000, Deceased:`${update[update.length-6].dailydeceased}`, amt: 2290,
            },
            {
                name: `${update[update.length-7].date}`, uv: 2000, Deceased:`${update[update.length-7].dailydeceased}`, amt: 2290,
            },
            
            
          ];
    }
    

    return (
      <AreaChart
        width={250}
        height={200}
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  dataKey="name" stroke="#ffffff"/>
        <YAxis   dataKey={props.for} stroke="#ffffff"/>
        <Tooltip />
        <Area type="monotone" dataKey={props.for} stroke="#000000" fill="#ffffff" />
      </AreaChart>
    );
}
