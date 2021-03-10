import React from 'react';
import {Redirect,Route} from 'react-router-dom';

export default function (props){
    let {component,exact,path}= props;
       return( 
           localStorage.getItem('token')?(
            <Route exact={exact} path={path} component={component}></Route>
           ):(
            <Redirect to='/login'></Redirect>
           ))
    
}