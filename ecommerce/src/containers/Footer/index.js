import React from 'react';
import className from 'classnames';
import Container from '../../components/Container';

import FormSubscribe from './FormSubscribe';
import Style from './index.module.css';
import StyleCommon from '../../common.module.css';
export default function Footer(props){
    return(
        <footer className={Style.footer}>
            <Container>
                <div className={className(StyleCommon.grid,Style.gridVariant)}>
                    <div>
                        <h4>CATEGORIAS</h4>
                        <ul>
                            <li>Mulher</li>
                            <li>Homem</li>
                            <li>Sapatos</li>
                            <li>Relógios</li>
                        </ul>
                    </div>
                    <div>
                        <h4>AJUDA</h4>
                        <ul>
                            <li>Acompanhar Pedido</li>
                            <li>Devoluções</li>
                            <li>Envio</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className={Style.getInTouch}>
                         <h4>ENTRAR EM CONTATO</h4>
                         <div>
                                Alguma pergunta? Informe-nos na loja no 8º anda
                                r, 379 Hudson St, New York, NY 10018 ou ligue para (+1) 96 716 6879
                         </div>
                    </div>
                    <div>
                        <h4>NEWSLETTER</h4>
                        <FormSubscribe></FormSubscribe>
                    </div>
                </div>
                <div className={Style.copyRight}>
                     Copyright ©2021 All rights reserved
                </div>
            </Container>
        </footer>
    )
}