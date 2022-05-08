import React from 'react';
import { View, Image } from 'react-native';

import * as Estilos from './estilos';

import Texto from '../../../../componentes/Texto';

const DetalhesFazenda = ({ nome, logo }) => {
    return (
        <View style={Estilos.container}>
            <Image style={Estilos.logo} source={logo} />
            <Texto style={Estilos.nome}>{nome}</Texto>
        </View>
    );
};

export default DetalhesFazenda;
