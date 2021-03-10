import React,{useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Menu  from './menu';
import Icons from './icons';
import MenuMobile from './MenuMobile';
import Style from './index.module.css'
import StyleCommon from '../../common.module.css';
export default function Header(props){
    const [userName,setUserName] = useState(localStorage.getItem('userName'))
    const [menuMobileVisible,setMenuMobileVisible] = useState(false);
    const history = useHistory();
    const logout = ()=>{
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        setUserName(null)
        history.push('/')  
    }
    return(
        <>
        <div className={Style.header}>
            <Container otherClassNames={[Style.container,Style.flexVariant,StyleCommon.flex]}>
                <div className={Style.componentBox}>
                    <Logo ></Logo>
                </div>
                <div className={Style.componentBox}>
                    <Menu 
                    ></Menu>
                </div>
                <div className={Style.componentBox}>
                    <Icons 
                    showMenuMobile ={()=>{setMenuMobileVisible(!menuMobileVisible);console.log(menuMobileVisible)}}
                    menuMobileVisible={menuMobileVisible} 
                    ></Icons>
                </div> 
                <div className={Style.componentBox}>
                    {userName?(
                        <>
                        <Link to='/profile'>{userName}</Link>  
                        <div 
                        onClick={()=>logout()}
                        className={Style.logout}>
                            sair
                        </div>
                        </>
                    ):(
                        <Link to='/login'>login</Link> 
                            
                    )
                    }
                  
                </div>
            
            </Container>
        </div>
        <MenuMobile 
               userName={userName}
               logout={()=>logout()}
               menuMobileVisible={menuMobileVisible} 
               ></MenuMobile>
        </>
     
    )
}