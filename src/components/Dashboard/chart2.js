import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import {IndiaData} from '../action/data'

export default function Chart2 (props) {

const dispatch= useDispatch(props);
const allIndiaData = useSelector((state) => state.dataIndia);
//const{loading,error,data}=allIndiaData;
const [update,setupdate]= React.useState()



React.useEffect(()=>{
    
    console.log(props)
    setupdate(props.data.data.cases_time_series)
    console.log(update)
},[update])
if(update){
    var data = [
        {
        name:`${update[update.length-1].date}`, Daily_Recovered:`${update[update.length-1].dailyrecovered}`
        },
        {
          name: `${update[update.length-2].date}`,  Daily_Recovered: `${update[update.length-2].dailyrecovered}`
        },
        {
          name: `${update[update.length-3].date}`,  Daily_Recovered:`${update[update.length-3].dailyrecovered}`
        },
        {
          name:`${update[update.length-4].date}`, Daily_Recovered:`${update[update.length-4].dailyrecovered}`
          },
          {
            name: `${update[update.length-5].date}`,  Daily_Recovered: `${update[update.length-5].dailyrecovered}`
          },
          {
            name: `${update[update.length-6].date}`,  Daily_Recovered:`${update[update.length-6].dailyrecovered}`
          },
          {
            name: `${update[update.length-7].date}`,  Daily_Recovered:`${update[update.length-7].dailyrecovered}`
          },
        
      ];
}


    return (
        <>
      <LineChart
        width={250}
        height={200}
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis  dataKey="Daily_Recovered" stroke="#ffffff" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Daily_Recovered" activeDot={{ r: 8 }} />
      </LineChart>
      </>
    );
}
