import React,{useState} from 'react';
import {useCart} from '../../../Hooks/Cart';
import classNames from 'classnames';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import ButtonClose from '../../../components/ButtonClose'
import StyleCommon from '../../../common.module.css'
import Style from './TableBody.module.css';
export default function TableBody(props){
    let {index,infoProduct} = props;
    let {removeProducItem} = useCart();
    const {changeQuantityItem} = useCart();
    const priceTotal = parseFloat(infoProduct.price*infoProduct.quantity).toFixed(2)
   
    const increaseQuantity = ()=>{
        let newQuantityItens = Number(infoProduct.quantity)+1;
        if(newQuantityItens<=99){
        changeQuantityItem(newQuantityItens,index)
        }
    }
    const decreaseQuantity = ()=>{
        let newQuantityItens = Number(infoProduct.quantity)-1;
        console.log(newQuantityItens)
        if(newQuantityItens>=1){
        changeQuantityItem(newQuantityItens,index)
        }
    }
    return(  
     <tbody className={Style.tableBody}> 

     {   index==0?(  
        <tr>
            <td><img src={infoProduct.imageLocation}/></td>
            <td>R$ {infoProduct.price}</td>
            <td className={classNames(Style.bodyRowquantity)} >
                <div>
                    <Button 
                    onClick={decreaseQuantity}
                    otherClassNames={Style.buttonBodyRowQuantity}>-</Button>
                </div> 
                <div>
                    <Input
                    value={infoProduct.quantity}
                    name={'quantityItens'}
                    onChange={()=>{} }
                    otherClassNames={Style.inputBodyRowQuantity}/>
                </div>
                <div>
                    <Button 
                    onClick={increaseQuantity}
                    otherClassNames={Style.buttonBodyRowQuantity}>+</Button>
                </div>
            </td> 
            <td>
            <div className={Style.close}>
                <ButtonClose 
                onClick={()=>removeProducItem(index)}
                otherClassNames={Style.buttonCloseVariant}/></div>
                R$ { priceTotal}</td>
        </tr>
     ):(
     <tr>
        <td><img src={infoProduct.imageLocation}/></td>
            <td>R$  {infoProduct.price}</td>
            <td className={classNames(Style.bodyRowquantity)} >
                <div>
                    <Button 
                    onClick={decreaseQuantity}
                    otherClassNames={Style.buttonBodyRowQuantity}>-</Button>
                </div> 
                <div>
                    <Input
                    value={infoProduct.quantity}
                    name={'quantifyItens'}
                    onChange={()=>{} }
                    otherClassNames={Style.inputBodyRowQuantity}/>
                </div>
                <div>
                    <Button 
                    onClick={increaseQuantity}
                    otherClassNames={Style.buttonBodyRowQuantity}>+</Button>
                </div>
            </td> 
            <td>
            <div className={Style.close}>
                <ButtonClose 
                onClick={()=>removeProducItem(index)}
                otherClassNames={Style.buttonCloseVariant}/></div>
                R$ { priceTotal}</td>
            
        </tr>
     )}
     
    </tbody>  

    )
}