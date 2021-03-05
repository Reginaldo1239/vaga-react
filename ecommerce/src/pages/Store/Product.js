import React from 'react';
import className from 'classnames';
import Style from './Product.module.css';
export default function Product(props){
return(
    <div className={Style.productCard}>
        <div className={className(Style.img,Style.imgCard)}>
                <img src='https://preview.colorlib.com/theme/cozastore/images/product-02.jpg'/>
        </div>
        <div className={Style.title}>
        Esprit Ruffle Shirt
        </div>
        <div className={Style.priceCard}>
                R$ 16,154
        </div>
       
      
    </div>
)
}