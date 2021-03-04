import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function (props){
    let {children,otherClassNames} = props;
    return(
        <form 
            className={classNames(Style.form,otherClassNames)}>
                {children}
        </form>
    )
}