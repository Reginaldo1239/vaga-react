import React from 'react';
import classnames from 'classnames';
import Images from './Images'
import InfoProduct from './infoProduct';
import StyleCommon from '../../common.module.css';
import Style from './Main.module.css'
export default function Main(props){
    let {infoProduct} = props;
    return(
        <main className={classnames(Style.main,StyleCommon.flex)}>
                <div>
                    <Images infoProduct={infoProduct}></Images>
                </div>
                <div> 
                    <InfoProduct  infoProduct={infoProduct} ></InfoProduct>
                </div>
        </main>
    )
}