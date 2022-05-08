import React from 'react';
import * as ReactNative from 'react-native';

import Texto from '../../../componentes/Texto';
import DetalhesFazenda from './DetalhesFazenda';

import Logo from '../../../../assets/logo.png';

const estilos = ReactNative.StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        color: "#464646",
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
    preco: {
        marginTop: 8,
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        color: "#2A9F85",
    }
});

const Detalhes = () => {
    return (
        <ReactNative.View style={estilos.container}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>

            <DetalhesFazenda nome="Jenny Jack Farm" logo={Logo} />

            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
            </Texto>

            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </ReactNative.View>
    );
};

export default Detalhes;
