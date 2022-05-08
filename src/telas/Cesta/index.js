import React from 'react';
import { ScrollView } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from '../../componentes/Itens';

const Cesta = ({ topo, detalhes, fazenda, itens }) => {
    return (
        <ScrollView>
            <Topo {...topo} />

            <Detalhes {...{ ...detalhes, fazenda }} >
                <Itens {...itens} />
            </Detalhes>
        </ScrollView>
    );
};

export default Cesta;
