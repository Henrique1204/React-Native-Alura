import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from './Texto';

const estilos = StyleSheet.create({
    botao: {
        width: "100%",
        paddingVertical: 16,
        borderRadius: 6,
        marginTop: 16,
        backgroundColor: "#2A9F85",
    },
    textoBotao: {
        width: "100%",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 26,
        color: "#FFF",
    }
});

const Botao = ({ children, onPress = () => {} }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={onPress}>
            <Texto style={estilos.textoBotao}>{children}</Texto>
        </TouchableOpacity>
    );
};

export default Botao;
