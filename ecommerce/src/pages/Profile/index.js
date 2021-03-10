import React,{useState} from 'react';
import Header from '../../containers/Header';
import Container from '../../components/Container';
import Footer from '../../containers/Footer';
import className from 'classnames';
import Style from './index.module.css';
import StyleCommon from '../../common.module.css';
export default function Profile(props){
    const pathImage = 'https://ecommerceteste1.s3.amazonaws.com/product/';
    const [imageCurrent,setImageCurrent] = useState(localStorage.getItem('imageProfile'))
    const changeImageProfile=(image)=>{
        localStorage.setItem('imageProfile',image)
        setImageCurrent(image);
    }
    const images=[
        "image-profile1.jpg",
        "image-profile2.jpg",
        "image-profile3.jpg"
    ];

    return(
        <div className={Style.profile}>
            <Header></Header>
                <Container>
                    <div className={Style.imageProfileCurrent}>
                         <img src={pathImage+imageCurrent}></img>
                    </div>
                    <div className={ className( StyleCommon.flex,Style.otherImages)}>
                        <h4>selecione uma nova image para o seu perfil</h4>
                        {images.map((image)=>
                         <div onClick={()=>changeImageProfile(image)}>
                            <img  src={pathImage+image}></img>  
                        </div>
                        )}
                       
                        
                    </div>
                </Container>
            <Footer></Footer>
        </div>
    )
}