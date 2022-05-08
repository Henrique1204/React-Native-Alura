import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Texto from './Texto';

const estilos = StyleSheet.create({
    titulo: {
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        color: "#464646",
    },
    item: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        flexDirection: "row",
        alignItems: "center",
    },
    itemImagem: {
        width: 46,
        height: 46,
        marginRight: 12,
    },
    itemNome: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
    }
});

const Itens = ({ titulo, lista }) => {
    return (
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>

            {lista.map(({ nome, imagem }, key) => (
                <View key={`${nome}_${key}`} style={estilos.item}>
                    <Image source={imagem}  style={estilos.itemImagem} />

                    <Texto style={estilos.itemNome}>{nome}</Texto>
                </View>
            ))}
        </>
    );
};

export default Itens;
