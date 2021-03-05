import React from 'react';
import ProductItem from './ProductItem';
import Style from './Products.module.css';
export default function Products(props){
    return(
        <div className={Style.products}>
            <ProductItem index={1}></ProductItem>
            <ProductItem index={2}></ProductItem>
            <ProductItem index={3}></ProductItem>
            <ProductItem index={4}></ProductItem>
            <ProductItem index={5}></ProductItem>
            <ProductItem index={6}></ProductItem>
            <ProductItem index={7}></ProductItem>
            <ProductItem index={8}></ProductItem>

        </div>
    )
}