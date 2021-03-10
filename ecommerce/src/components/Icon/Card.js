import React from 'react';
import classNames from 'classnames';
import Style from './Card.module.css';
import StyleCommon from '../../common.module.css';
export default function Card(props){
    let {active} = props;
    return(
        <div className={classNames(Style.card,StyleCommon.flex,{[Style.active]:active})} >
           <div  />
           <div  />
           <div />
           <div />
    
        </div>
    ) 
}