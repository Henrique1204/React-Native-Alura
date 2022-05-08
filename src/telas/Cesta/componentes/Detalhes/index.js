import React from 'react';
import { View } from 'react-native';

import * as Estilos from './estilos';

import Texto from '../../../../componentes/Texto';
import Botao from '../../../../componentes/Botao';

import DetalhesFazenda from '../DetalhesFazenda';

const Detalhes = ({ nome, descricao, preco, botao, fazenda, children }) => {
    return (
        <View style={Estilos.container}>
            <Texto style={Estilos.nome}>{nome}</Texto>

            <DetalhesFazenda {...fazenda} />

            <Texto style={Estilos.descricao}>{descricao}</Texto>

            <Texto style={Estilos.preco}>{preco}</Texto>

            <Botao>{botao}</Botao>

            {children}
        </View>
    );
};

export default Detalhes;
