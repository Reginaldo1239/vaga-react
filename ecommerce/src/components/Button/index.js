import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function props(props){
    let {type,children,otherClassNames} = props;
    return(
        <button 
        type={type?type:'button'} 
        className={classNames(Style.button,otherClassNames)}
        onClick={(event)=>props.onClick?props.onClick(event):null}
        >
            {children}
        </button>
    )
} 