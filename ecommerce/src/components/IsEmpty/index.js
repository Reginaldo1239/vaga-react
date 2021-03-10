import React from 'react';
import className from 'classnames'
import Style from './index.module.css';
export default function IsEmpty(props){
    let {otherClassNames} = props;
    return(
        <div className={ className(Style.isEmpty,otherClassNames)}>
                {props.children}
        </div>
    )
}