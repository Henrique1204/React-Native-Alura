import React from 'react';
import { StyleSheet, Dimensions, Image, Text } from 'react-native';

import Topo from '../../assets/topo.png';

const alturaTopo = 578; 
const larguraTopo = 768;
const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
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
    }
});

const Cesta = () => {
    return (
        <>
            <Image source={Topo} style={estilos.topo} />

            <Text style={estilos.titulo}>Detalhe da cesta</Text>
        </>
    );
};

export default Cesta;
