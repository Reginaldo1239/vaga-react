import React from 'react';
import Style from './index.module.css';
export default function MsgError(props){
    let {textError} = props;
    return(
        <div  className={Style.msgError}> 
             {textError}
        </div> 
    )
}