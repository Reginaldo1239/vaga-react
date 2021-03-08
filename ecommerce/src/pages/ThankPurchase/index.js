import React from 'react';
import Container from '../../components/Container';
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
                        inicio
                    </div>
                </div>
            
          
        </div>
    )
}