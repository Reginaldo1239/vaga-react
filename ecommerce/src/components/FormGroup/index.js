import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function (props){
    let {children,otherClasseNames}=props;
    return(
        <div className={classNames(Style.formGroup,otherClasseNames)} >
            {children}
        </div>
    )
}