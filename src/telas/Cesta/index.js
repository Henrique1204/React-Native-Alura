import React from 'react';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

const Cesta = ({ topo, detalhes, fazenda }) => {
    return (
        <>
            <Topo {...topo} />

            <Detalhes {...{ ...detalhes, fazenda }}  />
        </>
    );
};

export default Cesta;
