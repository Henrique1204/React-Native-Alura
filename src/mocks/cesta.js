import { logo } from '../../assets';
import { abobora, batata, brocolis, pepino, tomate } from '../../assets/frutas';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    fazenda: {
        logo,
        nome: "Jenny Jack Farm",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ],
    }
};

export default cesta;
