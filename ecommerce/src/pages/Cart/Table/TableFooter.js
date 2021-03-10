import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Style from './TableFooter.module.css';
export default function TableFooter(props){
    return(
        <tfoot className={Style.tableFooter}>
            <tr>
            <td></td>
                <td><Input/></td>
                <td><Button>aplicar cupom</Button></td>  
                <td></td>
             </tr>
           
        </tfoot>
    )
}