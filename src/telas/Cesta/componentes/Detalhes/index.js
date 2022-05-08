import React from 'react';
import { View } from 'react-native';

import * as Estilos from './estilos';

import DetalhesFazenda from '../DetalhesFazenda';
import Texto from '../../../../componentes/Texto';

const Detalhes = ({ nome, descricao, preco, fazenda }) => {
    return (
        <View style={Estilos.container}>
            <Texto style={Estilos.nome}>{nome}</Texto>

            <DetalhesFazenda {...fazenda} />

            <Texto style={Estilos.descricao}>{descricao}</Texto>

            <Texto style={Estilos.preco}>{preco}</Texto>
        </View>
    );
};

export default Detalhes;
