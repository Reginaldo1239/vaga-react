import React from 'react';
import {useCart} from '../../Hooks/Cart';
import {useHistory} from 'react-router-dom';
import Button from '../../components/Button';
import Style from './CartTotal.module.css';
export default function CartTotal (props){
    const {productsSelected,getTotalCart} = useCart();
    const history = useHistory();
    
    return(
        <div className={Style.cartTotal}>
            <div className={Style.container}>
                <header className={Style.header}>
                    <h3>total do carrinho</h3>
                    <h4>subTotal:{getTotalCart()} </h4>
                </header>
                <div className={Style.main}>
                    <Button onClick={()=>history.push('/checkout')}>finalizar compra</Button>
                </div>

            </div>
         
        </div>
    )
}