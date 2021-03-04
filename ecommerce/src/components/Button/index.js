import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function props(props){
    let {type,children,otherClasseNames} = props;
    return(
        <button 
        type={type?type:'button'} 
        className={classNames(Style.button,otherClasseNames)}>
            {children}
        </button>
    )
} 