import React from 'react';
import Style from './TableHead.module.css'

export default function TableHead(props){
    return(
        <thead className={Style.tableHead}>
            <tr>
                <th><h2>Produto</h2></th>
                <th><h2>Preço</h2></th>
                <th><h2>Quantidade</h2></th>
                <th><h2>Total</h2></th>
            </tr>   
        </thead>
    )
}