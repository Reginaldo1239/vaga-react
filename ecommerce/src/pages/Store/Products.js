import React from 'react';
import className from 'classnames';
import Product from './Product';
import Style from './Products.module.css';
import StyleCommon from '../../common.module.css';
import classNames from 'classnames';
export default function Products(props){
    return(
        <div className={classNames(Style.gridVariantCard,StyleCommon.grid)}>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}