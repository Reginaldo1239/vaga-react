import React from 'react';
import classNames from 'classnames';
import Header from '../../containers/Header';
import Container from '../../components/Container';
import CartTotal from './CartTotal';
import Style from './index.module.css';
import StyleCommon from '../../common.module.css';
import Table from './Table';

export default function Cart (props){
    return(
        <div>
            <Header></Header>
            <Container> 
                <div className={classNames(StyleCommon.flex,Style.main)}>
                    <div>
                        <Table></Table>
                    </div>
                    <div>
                        <CartTotal></CartTotal>
                    </div>
                </div>
            </Container>
        </div>
    )
}