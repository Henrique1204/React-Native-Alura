import React from 'react';
import * as ReactNative from 'react-native';

import Texto from '../componentes/Texto';

import Topo from '../../assets/topo.png';
import Logo from '../../assets/logo.png';

const alturaTopo = 578; 
const larguraTopo = 768;
const width = ReactNative.Dimensions.get('screen').width;

const estilos = ReactNative.StyleSheet.create({
    topo: {
        width: '100%',
        height: alturaTopo / larguraTopo * width,
    },
    titulo: {
        width: "100%",
        padding: 16,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 26,
        color: "white",
        position: "absolute",
    },
    cestaContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        color: "#464646",
    },
    fazendaContainer: {
        paddingVertical: 12,
        flexDirection: 'row',
    },
    logoFazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
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

const Cesta = () => {
    return (
        <>
            <ReactNative.Image source={Topo} style={estilos.topo} />

            <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

            <ReactNative.View style={estilos.cestaContainer}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>

                <ReactNative.View style={estilos.fazendaContainer}>
                    <ReactNative.Image style={estilos.logoFazenda} source={Logo} />
                    <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
                </ReactNative.View>

                <Texto style={estilos.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
                </Texto>

                <Texto style={estilos.preco}>R$ 40,00</Texto>
            </ReactNative.View>
        </>
    );
};

export default Cesta;
