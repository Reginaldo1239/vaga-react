import React from 'react';
import className from 'classnames';
import Style from './List.module.css';
export default function List(props){
    let {active} = props;
    return(
        <div className={className(Style.card,{[Style.active]:active}) }  >
           <div />
           <div />
           <div />
    
        </div>
    )
}  