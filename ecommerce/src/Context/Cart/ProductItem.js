import React from 'react';
import classNames from 'classnames';
import ButtonClose from '../../components/ButtonClose'
import Style from  './ProductItem.module.css';
import StyleCommon from '../../common.module.css';

export default function ProductItem(props){
    return(
        <div className={classNames(Style.productItem,StyleCommon.flex)}>
            <div>
                <img src={'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg'}/>
            </div>
            <div>
                <div className={Style.removeProductItem}>
                    <ButtonClose onClick={()=>props.removeProductItem(0)} otherClassNames={Style.buttonCloseVariant}></ButtonClose>
                </div>
                {props.index}
            </div>
        </div>   
    )
}