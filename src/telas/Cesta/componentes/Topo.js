import React from 'react';
import * as ReactNative from 'react-native';

import Texto from '../../../componentes/Texto';

import ImagemTopo from '../../../../assets/topo.png';

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
    }
});

const Topo = () => {
    return (
        <>
            <ReactNative.Image source={ImagemTopo} style={estilos.topo} />

            <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
        </>
    );
};

export default Topo;
