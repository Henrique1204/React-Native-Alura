import React from 'react';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from '../../componentes/Itens';

const Cesta = ({ topo, detalhes, fazenda, itens }) => {
    return (
        <Itens {...itens}>
            <Topo {...topo} />

            <Detalhes {...{ ...detalhes, fazenda }} />
        </Itens>
    );
};

export default Cesta;
