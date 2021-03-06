import React from 'react';
import Style from './index.module.css';
export default function Label(props){
    let {otherClassNames,children} = props;
    return(
        <div className={Style.label}>
        <label>
                {children}
        </label>
        </div>
    )
} 