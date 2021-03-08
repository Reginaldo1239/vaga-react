import React from 'react';
import {useHistory} from 'react-router-dom';
import className from 'classnames';
import Style from './Product.module.css';
import StyleCommon from '../../common.module.css';
export default function Product(props){
    let {infoProduct,layoutType} = props;
    let history = useHistory();
return(
    <div 
    onClick={()=>history.push(`/product/${infoProduct.id}`)}
    className={className({[Style.productCard]:layoutType=='card',[Style.productList]:layoutType=='list'},StyleCommon.flex )} >
        <div className={className(Style.img,{[Style.imgCard]:layoutType=='card',[Style.imgList]:layoutType=='list'})}>
                <img src={infoProduct.imageLocation}/>
        </div>
        <div className={className({[Style.infoProductCard]:layoutType=='card',[Style.infoProductList]:layoutType=='list'})}>
            <div className={Style.title}>
                {infoProduct.name}
            </div>
            <div className={Style.priceCard}>
                    R$    {infoProduct.price}
            </div>
        </div>
      
    </div>
)
}