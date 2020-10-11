import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import { useSelector, useDispatch } from 'react-redux';
import {Formsubmit} from '../action/form'



const useStyles = makeStyles((theme) => ({
      fab: {
        margin: theme.spacing(2),
      },
      absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
        root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
  },
}));

export default function Form ()
{
 
const [TextFieldValues,setTextFieldValues]= React.useState([])
const[checkField,setcheckField]=React.useState([])
const [optionValues,setoptionValues]= React.useState([])
const[TextFieldStatus,setTextField]= React.useState(1)
const[name,setname]=React.useState()
const[des,setdes]=React.useState()
const[name1,setname1]=React.useState()
const[des1,setdes1]=React.useState()
const[opt,setopt]=React.useState()
const[status,setstatus]=React.useState(false)
const[InputType,setInputType]= React.useState(-1)


const dispatch= useDispatch();
const submitForm = useSelector((state) => state.submitForm);
const{loading,error,form_submit_data}=submitForm;




const remove=(e,id)=>{
    let values = [...checkField];
     values.splice(id,1);
     setcheckField(values)
     setstatus(!status)


}
const addClick=e=>{
    let val=[...TextFieldValues,{"name":name,"des":des}]
    setTextFieldValues(val)
    console.log(TextFieldValues.length,"kl")
    setstatus(!status)
    setTextField("1")
   
     
}
const addCheck=e=>{
    console.log(InputType)
    let val;
    if(InputType==-1)
    {
         val=[...checkField,{"inputType":"-1","name":name,"des":des,"value":""}]

    }
    else{
     val=[...checkField,{"inputType":InputType,"name":name1,"des":des1,"option":optionValues,"value":""}]

    }
   
    setcheckField(val);
    setstatus(!status)
}
const handleDelete=(e,index)=>{
    let values = [...optionValues];
     values.splice(index,1);
     setoptionValues(values)
     setstatus(!status)

}
const addOptions=e=>{
    let val=[...optionValues,{"value":opt}]
    setoptionValues(val)
}
const handleChange=(value,index,name)=>{
    console.log(value,index,name)
    checkField[index].value=value
    console.log(checkField[index].value,"tr",checkField);


}
const handleFormSubmit=e=>{
    dispatch(Formsubmit())
    if(form_submit_data)
    {
        alert("form Submited")

    }

    
}

React.useEffect(()=>{
    setoptionValues([])
    setname()
    setname1()
    setdes()
    setdes1()
    setopt()
    console.log(TextField)

},[status])

 
return (
    <>
      <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-around">
                
                <div className="col-lg-4 col-md-6 col-8  ml-2 mt-2 mb-2  card">
                    
                   
<Button variant="contained" color="secondary" >
Add Text Fields
</Button>
<br/>

<TextField id="standard-basic" label="Name"  onChange={(e)=>{setname(e.target.value); setInputType(-1)}} required/>
<Tooltip title="Name" style={{color:"blue"}}>
<InfoIcon/>
</Tooltip>
<br/>
<TextField id="standard-basic" label="Description"  onChange={(e)=>{setdes(e.target.value); setInputType(-1)}} required/>
<Tooltip title="Description" style={{color:"blue"}}>
<InfoIcon/>
</Tooltip>
<br/>
<Button variant="contained" color="primary" onClick={(e)=>{addCheck(e)}} >
<AddIcon/>
</Button>

                   
<Button variant="contained" color="secondary" className="mt-2">
Add Checkboxes / DropDowns / Radio Buttons
</Button>
<FormControl >
        <InputLabel id="demo-simple-select-label">Select Type of Input</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e)=>{setInputType(e.target.value)}}
          
        >
          <MenuItem value={1}>CheckBoxes</MenuItem>
          <MenuItem value={2}>Radio Buttons</MenuItem>
          <MenuItem value={3}>DropDown Buttons</MenuItem>
        </Select>
      </FormControl>
      <Tooltip title="Option 1 gives checkboxes, option 2 gives radio button and option 3 gives dropdown" style={{color:"blue"}}>
        <InfoIcon/>
    </Tooltip>
    <br/>


<TextField id="standard-basic" label="Name"  onChange={(e)=>{setname1(e.target.value)}} required/>
<Tooltip title="Name" style={{color:"blue"}}>
<InfoIcon/>
</Tooltip>
<br/>
<TextField id="standard-basic" label="Description"  onChange={(e)=>{setdes1(e.target.value)}} required/>
<Tooltip title="Description" style={{color:"blue"}}>
<InfoIcon/>
</Tooltip>
<br/>
{optionValues && optionValues.map((list,index)=>{
            return(
                <>
                 <Chip key={index} label={list.value} onDelete={(e)=>{handleDelete(e,index)}} color="secondary" />

                </>
            )
})}
<div className="d-flex justify-content-around">
    <div>
        <TextField id="standard-basic" label="Option Value"  onChange={(e)=>{setopt(e.target.value)}} required/>
        <Tooltip title="Options" style={{color:"blue"}}>
        <InfoIcon/>
        </Tooltip>
    </div>
    <div>
        <Button variant="contained" color="primary" onClick={(e)=>{addOptions(e)}} >
        <AddIcon/>
        </Button>
    </div>
</div>


<Button variant="contained" color="primary" onClick={(e)=>{addCheck(e)}} >
<AddIcon/>
</Button>

                




                   

                </div>
                <div className="col-lg-4 col-md-6 col-8  ml-2 mt-2 mb-2  ">
                    

                    {
                        checkField && checkField.map((list,index)=>{
                            return(
                                <>
                                {
                                    list.inputType==-1 &&(<>
                                    <div key={index}>
                                    <label><h4><em>{list.name}</em></h4></label><br/>
                                <input  placeholder={list.name} 
                                onChange={(e)=>{handleChange(e.target.value,index,list.name)}}/>
                                <Tooltip style={{color:"blue"}} title={list.des}>
                                    <InfoIcon/>

                                </Tooltip>
                                <Button onClick={(e)=>{remove(e,index)}}><CancelIcon color="secondary"/></Button>
                                </div>
                                    
                                    </>)
                                }

                                {list.inputType==1 &&(<>
                                    <div key={index}>
                                    <label><h4><em>{list.name}</em></h4></label><br/>
                                {list.option && list.option.map((list1)=>{
                                    return(<>
                                

                                <FormControlLabel
                                    control={<Checkbox  name="checkedA" />}
                                    label={list1.value} onChange={(e)=>{handleChange(list1.value,index,list.name)}}
                                />
                                    </>)
                                })}
                                <Tooltip style={{color:"blue"}} title={list.des}>
                                    <InfoIcon/>

                                </Tooltip>
                                <Button  onClick={(e)=>{remove(e,index)}}><CancelIcon color="secondary"/></Button>
                                </div>
                                
                                </>)}
                                {list.inputType==2 &&(<>
                                
                                
                                    <div key={index}>
                                    <label><h4><em>{list.name}</em></h4></label><br/>
                                <RadioGroup aria-label={list.name} name={list.name} onChange={(e)=>handleChange(e.target.value,index,list.name)}>
                                {list.option && list.option.map((list1)=>{
                                    return(<>
                                <FormControlLabel value={list1.value} control={<Radio />} label={list1.value} />
                                
                                    </>)
                                })}
                                </RadioGroup>
                                <Tooltip style={{color:"blue"}} title={list.des}>
                                    <InfoIcon/>

                                </Tooltip>
                                <Button  onClick={(e)=>{remove(e,index)}}><CancelIcon color="secondary"/></Button>
                                </div></>)}
                                {list.inputType==3 &&(<>
                                    <div key={index}>
                                    <label><h4><em>{list.name}</em></h4></label><br/>

                                <select
                                id="inputState" className="form-control"
                               
                                onChange={(e)=>handleChange(e.target.value,index,list.name)}
                                >
                                    <option>Select--</option>
                                
                                {list.option && list.option.map((list1)=>{
                                    return(<>
                                <option value={list1.value}>{list1.value}</option>
                        
                                    </>)
                                })}
                                </select>
                                <Tooltip style={{color:"blue"}} title={list.des}>
                                    <InfoIcon/>

                                </Tooltip>
                                <Button  onClick={(e)=>{remove(e,index)}}><CancelIcon color="secondary"/></Button>
                                </div>
                                
                                
                                </>)}
                                
                               
                                </>
                            )
                        })

                        
                    }
                    {
                        checkField && checkField.length>0 &&(<> <Button onClick={(e)=>handleFormSubmit()} variant="contained" color="primary"> Submit</Button></>)
                    }




                </div>


            </div>
        </div>
    

    </>
    
 

    )
}




// <div className="card">
//     <form className={classes.root} noValidate autoComplete="off">
//     <TextField id="standard-basic" label="Name" />
//     <Tooltip title="Name" style={{color:"blue"}}>
//         <InfoIcon/>
//     </Tooltip>
//     <br/>
//     <FormControl className={classes.formControl}>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={1}>True</MenuItem>
//           <MenuItem value={2}>False</MenuItem>
//         </Select>
//       </FormControl>
//       <Tooltip title="True will give you checkboxes while False will give you radio buttons" style={{color:"blue"}}>
//         <InfoIcon/>
//     </Tooltip>
//     <br/>

    
//     <br/>
// {optnType==1 &&(<>
//     <FormControl id="optn1"  className={classes.formControl} className="optn">
    
  
//     <FormControlLabel
//       control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
//       label="Secondary"
//     />
//     <FormControlLabel
//       control={
//         <Checkbox
//           checked={state.checkedB}
//           onChange={handleChange}
//           name="checkedB"
//           color="primary"
//         />
//       }
//       label="Primary"
//     />
//     <FormControlLabel
//       control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
//       label="Other"
//     />
//     </FormControl>
  
//     <Tooltip className="optn" id="tip1" title="True will give you checkboxes while False will give you radio buttons" style={{color:"blue"}}>
//       <InfoIcon/>
//   </Tooltip>

// </>)}
// {optnType==2 && (<>
//     <FormControl id="optn2" component="fieldset" className="optn">
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//         <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//       </RadioGroup>
//     </FormControl>

//     <Tooltip className="optn" id="tip2" title="True will give you checkboxes while False will give you radio buttons" style={{color:"blue"}}>
//         <InfoIcon/>
//     </Tooltip>
//     <br/>

// </>)}

    

    
    
      
  
    
    
    
//     </form>

//     </div>

