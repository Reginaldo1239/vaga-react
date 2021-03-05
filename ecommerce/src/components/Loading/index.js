import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function Loading (props){
    let {otherClassNames} = props;
    return (
        <div className={classNames(Style.loading,otherClassNames)}>
            <div></div>
            <div></div>
        </div>
    )
}