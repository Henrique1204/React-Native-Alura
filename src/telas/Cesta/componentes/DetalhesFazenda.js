import React from 'react';
import * as ReactNative from 'react-native';

import Texto from '../../../componentes/Texto';

const estilos = ReactNative.StyleSheet.create({
    container: {
        paddingVertical: 12,
        flexDirection: 'row',
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
    },
});

const DetalhesFazenda = ({ nome, logo }) => {
    return (
        <ReactNative.View style={estilos.container}>
            <ReactNative.Image style={estilos.logo} source={logo} />
            <Texto style={estilos.nome}>{nome}</Texto>
        </ReactNative.View>
    );
};

export default DetalhesFazenda;
