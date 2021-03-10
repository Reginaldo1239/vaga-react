import React from 'react';
import {Link} from 'react-router-dom';
import Style from './index.module.css';
export default function(props){
    return(
        <div className={Style.thankPurchase}>
            <div className={Style.infoPurchase}>
                    <div>
                        compra realizada com sucesso 
                    </div>
                    <div>
                        nº15511
                    </div>
                    <div>
                           <Link to='/'>inicio</Link> 
                    </div>
                </div>
        </div>
    )
}