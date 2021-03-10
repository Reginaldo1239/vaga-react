import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames'
import Style from './MenuMobile.module.css';
export default function MenuMobile(props){
    let {otherClassNames,menuMobileVisible} = props;
    return(
    <nav className={classNames(Style.menuMobile,{[Style.openMenuMobile]:menuMobileVisible},otherClassNames)}>
        <ul>
            <li><Link to='#'>Inicio</Link></li>
            <li><Link to='/'>Loja</Link></li>
            <li><Link to='#'>Blog</Link></li>
            <li><Link to='#'>Sobre</Link></li>
            <li><Link to='#'>Contato</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>   
     </nav>
    )
}