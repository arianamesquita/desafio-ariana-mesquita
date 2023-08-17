import { criarCardapio } from "./cardapio.js";
import { cadastrarCarrinho } from "./carrinho.js";

console.log(criarCardapio());

class CaixaDaLanchonete {

    metodoDePagamento;
    itens;

    constructor(metodoDePagamento, itens){
        this.metodoDePagamento = metodoDePagamento;
        this.itens = itens;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let somaTotal = 0;
        for (let element of itens) {
            somaTotal = somaTotal + element.valorTotal;
        }
        if (metodoDePagamento === 'dinheiro'){
            somaTotal = somaTotal - (5/100 * somaTotal);
        } else if (metodoDePagamento === 'credito'){
            somaTotal = somaTotal + (3/100 * somaTotal);
        }
        cadastrarCarrinho() 
        return somaTotal;
    }
}

export { CaixaDaLanchonete };
