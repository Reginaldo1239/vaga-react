import React,{Fragment} from 'react';
import classNames from 'classnames';
import {Link } from 'react-router-dom';
import Style from './menu.module.css';
export default function NavBar(props){
   let {otherClassNames}  =  props;
    return(
             <nav className={classNames(Style.menuDesktop,otherClassNames)}>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/'>Loja</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Sobre</Link></li>
                    <li><Link to='/'>Contato</Link></li>
               
                </ul>   
            </nav>
    
        
    )
}