import React,{useState,useEffect} from 'react';
import classNames from 'classnames';
import ButtonClose from '../../components/ButtonClose';
import ProductItem from './ProductItem';
import Products from './Products';
import Style from  './ComponentCart.module.css';
import StyleCommon from '../../common.module.css';
export default function ComponentCart(props){
    let {showCart} = props;
    
    
    return(
        <div className={classNames(Style.componentCart,{[Style.showComponentCart]:showCart,[Style.hiddenComponentCart]:!showCart})}>
              <div className={classNames({[Style.shadow]:true,[Style.showShadow]:showCart,[Style.hiddenShadow]:!showCart})}></div>
                <div className={classNames(Style.cart,{[Style.showCart]:showCart,[Style.hiddenCart]:!showCart})}>
                   <div className={Style.container}>
                         <header className={classNames(Style.header,StyleCommon.flex)}>
                            <div>
                               seu carrinho
                            </div>
                            <div>
                                <ButtonClose onClick={()=>props.closeCart()}></ButtonClose>
                            </div>
                        </header>
                        <Products></Products> 
                   
                          
                    </div> 

                </div>
              
               
        </div>
    )
}