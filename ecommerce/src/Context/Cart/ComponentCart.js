import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import StyleCommon from '../../common.module.css';
import Style from  './ComponentCart.module.css';
import Products from './Products';
import classNames from 'classnames';
import ButtonClose from '../../components/ButtonClose';
import Button from '../../components/Button';



export default function ComponentCart(props){
    const history = useHistory();
    let {showCart,productsSelected,removeProducItem} = props;
 
    
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
                        <Products 
                        removeProducItem={removeProducItem}
                        productsSelected={productsSelected}></Products> 
                   
                        <div className={Style.boxOrderClose}>
                            <Button onClick={()=>{history.push('/cart'); props.closeCart()}}> fechar pedido</Button>
                        </div> 
                    </div> 
                </div>
        </div>
    )
}