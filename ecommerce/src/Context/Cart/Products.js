import React,{ useEffect } from 'react';
import ProductItem from './ProductItem';
import Style from './Products.module.css';
export default function Products(props){
    let {productsSelected,removeProducItem} = props;
    if(productsSelected.length===0)  return <div className={Style.cartIsEmpty}>o seu carrinho está vázio</div>
    return(
        <div className={Style.products}>
        
         {productsSelected.map((infoProduct,index)=>
                <ProductItem 
                key={index}
                removeProducItem={removeProducItem}
                infoProduct={infoProduct}
                index={index}></ProductItem>
         )}

        </div>
    )
}