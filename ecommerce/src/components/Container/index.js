import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';

export default function(props){
    let {otherClassNames,children} = props; 
    return(
        <div className={classNames(Style.container,otherClassNames)}>
                {children}
        </div>
    )
}