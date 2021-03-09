import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Container from '../../components/Container';
import Description from './Description';
import ListEvaluation from './ListEvaluation';

import {getInfoSiteApi} from './indexApi';
import Main from './main';

export default function ProductDetail(props){
    const [infoProduct,setInfoProduct] = useState([]);
    const  {product_id}= useParams();
        useEffect(async ()=>{
            getInfoSite();
        },[]);

    const getInfoSite= async ()=>{
      try{
            let infoSite=  await getInfoSiteApi(product_id);
            console.log(infoSite)
            setInfoProduct(infoSite);
        }catch(err){

        }
         
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Main  infoProduct={infoProduct} ></Main>
                <Description></Description>
                <ListEvaluation></ListEvaluation>
            </Container>
            <Footer></Footer>
        </div>
    )
}  