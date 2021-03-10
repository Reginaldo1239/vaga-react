import React,{useEffect} from 'react';
import {useCart} from '../../Hooks/Cart';
import Button from '../../components/Button';
import Style from './infoProduct.module.css';
export default function (props){
    let {description,genre,id,imageLocation,name,price,type,infoProduct} = props;
  
    const {addProductItem,productsSelected} = useCart();
    useEffect(()=>{
        console.log(props)
        console.log(infoProduct)
        
    },[])
    return (
        <div className={Style.infoProduct}>
            <div className={Style.item}>
                <h2>{infoProduct.name}</h2>
            </div>
            <div className={Style.item}>
                <h5>R$ {infoProduct.price}</h5>
            </div>
            <div className={Style.item}>
                 <Button onClick={()=>addProductItem(infoProduct)} >add carrinho</Button>
            </div>
           
        </div>
    )
}