import React from 'react';
import { Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
    }
});

const Texto = ({ children, style = {} }) => {
    const { fontWeight, ...estilosProp } = style;
    
    const estiloTexto =
        fontWeight === "bold" || fontWeight === "600" ? estilos.textoNegrito : estilos.texto;

    return <Text style={[estilosProp, estiloTexto]}>{children}</Text>
};

export default Texto;
