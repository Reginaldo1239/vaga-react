import React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';
export default function Input(props){
    let {type,name,placeholder,value,otherClassNames} =props;
   
        
    return(
        <input 
            className={classNames(Style.input,otherClassNames)}    
            type={type?type:'text'}
            name={name?name:''}
            placeholder={placeholder?placeholder:''}
            value={value}
            onChange={(event)=>props.onChange?props.onChange(event):null}
            />
    )
}