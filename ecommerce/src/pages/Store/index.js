import React from 'react';
import Container from '../../components/Container';
import Header from '../../containers/Header';
import HeaderStore from './HeaderStore';
import Filter from './Filter';
import Products from './Products';
import Footer from '../../components/Footer';

export default function Store(props){
    return(
        <div>
            <Header></Header>
            <Container>
                <HeaderStore></HeaderStore>
                <Filter></Filter>
                <Products></Products>
            </Container>
            <Footer></Footer>
        </div>
    )
}