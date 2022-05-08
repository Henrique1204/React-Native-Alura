import React from 'react';
import * as ReactNative from 'react-native';

const estilos = ReactNative.StyleSheet.create({
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

    return <ReactNative.Text style={[estilosProp, estiloTexto]}>{children}</ReactNative.Text>
};

export default Texto;
