import { Dimensions, StyleSheet } from 'react-native';

const alturaTopo = 578; 
const larguraTopo = 768;
const width = Dimensions.get('screen').width;
                               
export const topo = StyleSheet.create({
    width: '100%',
    height: alturaTopo / larguraTopo * width,
});

export const titulo = StyleSheet.create({
    width: "100%",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
    color: "white",
    position: "absolute",
});
