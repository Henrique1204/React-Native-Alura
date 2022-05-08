import React from 'react';
import * as ReactNative from 'react-native';

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
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
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
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratRegular",
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

            <ReactNative.Text style={estilos.titulo}>Detalhe da cesta</ReactNative.Text>

            <ReactNative.View style={estilos.cestaContainer}>
                <ReactNative.Text style={estilos.nome}>Cesta de Verduras</ReactNative.Text>

                <ReactNative.View style={estilos.fazendaContainer}>
                    <ReactNative.Image style={estilos.logoFazenda} source={Logo} />
                    <ReactNative.Text style={estilos.nomeFazenda}>Jenny Jack Farm</ReactNative.Text>
                </ReactNative.View>

                <ReactNative.Text style={estilos.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
                </ReactNative.Text>

                <ReactNative.Text style={estilos.preco}>R$ 40,00</ReactNative.Text>
            </ReactNative.View>
        </>
    );
};

export default Cesta;
