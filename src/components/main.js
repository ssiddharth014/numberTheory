import React from 'react'
import Drawer from './sidebar/index'
import Index from './Dashboard/index'
import Form from './form/index'
import Button from '@material-ui/core/Button';
import Header from '../components/Header'
import {Switch, Route, Redirect} from 'react-router-dom';

export default function Main(){
   
    return(
        <>
       
         <Header/>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/Form" component={Form} />
        </Switch>

       
        
        
       

        
        </>
    )
}