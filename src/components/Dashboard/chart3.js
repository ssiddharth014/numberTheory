import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import {WorldData} from '../action/data'
// const data01 = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
// ];

// const data02 = [
//   { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
//   { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
//   { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
// ];

export default function Chart3(props) {
    
const dispatch= useDispatch(props);
const allWorldData = useSelector((state) => state.dataWorld);
//const{loading,error,data}=allIndiaData;
const [update,setupdate]= React.useState()


React.useEffect(()=>{
    
    console.log(props.data.data.Global)
    setupdate(props.data.data.Global)
    console.log(update)
},[update])

if(update){
    console.log(update.TotalConfirmed,"up")
    var data01 = [
        {
        name:`Total Cases`, value:update.TotalConfirmed
        },
        {
          name: `Total Recovered`, value:update.TotalRecovered
        },
        {
          name: `Total Death `, value:update.TotalDeaths
        },
        
      ];
      var data02 = [
        {
        name:`NEW Cases`, value:update.NewConfirmed
        },
        {
          name: `NEW Recovered`, value:update.NewRecovered
        },
        {
          name: `NEW Death `, value:update.NewDeaths
        },
        
      ];
}
    return (
        <>
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-around">
                
                <div className="col-lg-6 col-md-6 col-8  ml-2 mt-2 mb-2  ">
                    
                    <PieChart width={400} height={400}>
                    <Pie dataKey="value"
                    isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={120} fill="#8884d8" label />

                    {/* <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={100} outerRadius={120} fill="#82ca9d" /> */}
                    <Tooltip />
                    </PieChart>
                    <h5><em>Overall Cases Scenario..</em></h5>
    
                    

                </div>
                <div className="col-lg-3 col-md-4 col-10  ml-2 mt-2 mb-2  ">
                    <PieChart width={400} height={400}>

                    <Pie dataKey="value"
                    isAnimationActive={false} data={data02} cx={200} cy={200} outerRadius={120} fill="#8884d8" label />
                    <Tooltip />
                    </PieChart>
                    <h5><em>New Cases Scenario..</em></h5>
                    

                </div>
            </div>
        </div>
    
</>

    );
}
