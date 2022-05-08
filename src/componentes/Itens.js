import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from './Texto';

const estilos = StyleSheet.create({
    titulo: {
        paddingHorizontal: 16,
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        color: "#464646",
    },
    item: {
        padding: 16,
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

const Item = ({ item: { nome, imagem } }) => {
    return (
        <View style={estilos.item}>
            <Image source={imagem}  style={estilos.itemImagem} />

            <Texto style={estilos.itemNome}>{nome}</Texto>
        </View>
    );
};

const Itens = ({ titulo, lista, children }) => {
    return (
        <FlatList
            data={lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => (
                <>
                    {children}

                    <Texto style={estilos.titulo}>{titulo}</Texto>
                </>
            )}
        />
    );
};

export default Itens;
