import React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';
export default function Input(props){
    let {type,name,textError,placeholder,value,otherClassNames} =props;
   
        
    return(
        <div 
        className={classNames(Style.input,otherClassNames)}
         >
        <input 
            type={type?type:'text'}
            name={name?name:''}
            placeholder={placeholder?placeholder:''}
            value={value?value:''}
            onChange={(event)=>props.onChange(event) }
            onKeyDown={(event)=>props.onKeyDown?props.onKeyDown(event): null}
            />
            <div > 
                {textError}
            </div> 
                  
            </div>
    )
}