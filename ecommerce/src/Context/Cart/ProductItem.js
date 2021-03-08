import React from 'react';
import classNames from 'classnames';
import ButtonClose from '../../components/ButtonClose'
import Style from  './ProductItem.module.css';
import StyleCommon from '../../common.module.css';

export default function ProductItem(props){

    let {name,price,imageLocation,quantity} = props.infoProduct;
    let {index} = props;
    return(
        <div className={classNames(Style.productItem,StyleCommon.flex)}>
            <div>
                <img src={imageLocation}/>
            </div>
            <div>
                <div className={Style.removeProductItem}> 
                    <div>
                         <ButtonClose onClick={()=>props.removeProducItem(index)} otherClassNames={Style.buttonCloseVariant}></ButtonClose>
                    </div>
                </div> 
                <div className={Style.infoProduct}>
                     <div>
                         <h4>{name}</h4>
                    </div>
                     <div>{quantity} x R$ {price}</div>
                </div>
            </div>
        </div>   
    )
}