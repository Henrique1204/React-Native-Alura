import { StyleSheet } from 'react-native';

export const container = StyleSheet.create({
    paddingVertical: 8,
    paddingHorizontal: 16,
});

export const nome = StyleSheet.create({
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    color: "#464646",
});

export const descricao = StyleSheet.create({
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3",
});

export const preco = StyleSheet.create({
    marginTop: 8,
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    color: "#2A9F85",
});

export const botao = StyleSheet.create({
    width: "100%",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 16,
    backgroundColor: "#2A9F85",
});

export const textoBotao = StyleSheet.create({
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
    color: "#FFF",
});
