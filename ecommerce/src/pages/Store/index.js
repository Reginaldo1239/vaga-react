import React,{useState} from 'react';
import className from 'classnames';
import Container from '../../components/Container';
import Header from '../../containers/Header';
import HeaderStore from './HeaderStore';
import Filter from './Filter';
import Products from './Products';
import Footer from '../../containers/Footer';
import Icon from '../../components/Icon';
import StyleCommon from '../../common.module.css';
import Style from './index.module.css';
export default function Store(props){
    const [layoutType,setLayoutType] = useState('card') //card or list
    const changeLayoutType =(layout)=>{
        setLayoutType(layout)
    }
    return(
        <div>
            <Header></Header>
            <Container>
                <HeaderStore></HeaderStore>
                <Filter></Filter>
                <div className={className(Style.icons,StyleCommon.flex)}>
                    <div className={className( Style.iconAbsolute,StyleCommon.flex)}>
                        <div
                         onClick={()=>changeLayoutType('card')}
                        >
                            <Icon 
                            onClick={()=>changeLayoutType('card')}
                            active={layoutType=='card'} iconName='card'></Icon>
                        </div> 
                        <div
                         onClick={()=>changeLayoutType('list')}
                        >
                            <Icon 
                          
                            active={layoutType=='list'} iconName='list'></Icon>
                        </div>
                    </div> 
                </div>
                <Products layoutType={layoutType}></Products>
            </Container>
            <Footer></Footer>
        </div>
    )
}