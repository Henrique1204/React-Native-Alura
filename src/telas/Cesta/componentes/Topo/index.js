import React from 'react';
import { Image } from 'react-native';

import * as Estilos from './estilos';

import Texto from '../../../../componentes/Texto';

import ImagemTopo from '../../../../../assets/topo.png';

const Topo = ({ titulo }) => {
    return (
        <>
            <Image source={ImagemTopo} style={Estilos.topo} />

            <Texto style={Estilos.titulo}>{titulo}</Texto>
        </>
    );
};

export default Topo;
