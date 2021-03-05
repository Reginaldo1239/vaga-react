import React from 'react';
import classNames from 'classnames';
import Style from './index.module.css';
export default function(props){
    let {otherClassNames} = props;
    return (
        <div className={classNames(Style.logo,otherClassNames)}>
            <span>ecommerce</span>
        </div>
    )
}