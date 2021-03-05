import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function ButtonClose(props){
    let {otherClassNames} = props;
    return(
        <div onClick={(event)=>props.onClick(event)} className={classNames(Style.buttonClose,otherClassNames)} >
            <i>X</i>
        </div>
    )
}