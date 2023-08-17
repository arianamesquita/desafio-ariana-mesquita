import { conferirItem } from "./cardapio.js";

class Carrinho{

    Cardapio;
    quantidadeItens;
    valorTotal;

    constructor(Cardapio, quantidadeItens, valorTotal){
        this.Cardapio = Cardapio;
        this.quantidadeItens = quantidadeItens;
        this.valorTotal = valorTotal;
    }

}

export function cadastrarCarrinho(codigo, quantidadeItens){
    Carrinho = [];
    const item = conferirItem(codigo);
    let valorTotal = 0;
    for (const compras of Carrinho) {
        if (compras === null){
            console.log("Não há itens no carrinho de compra");
        } else if (Carrinho === null && item.descricao === "extra"){
            console.log("Não é possível pedir item extra sem um principal");
        } else if (quantidadeItens === 0){
            console.log("Quantidade inválida!");
        } else {
            const itemSelecionado = conferirItem;
            valorTotal = item.valor * quantidadeItens;
            const compra = new Carrinho(itemSelecionado, quantidadeItens, valorTotal);
            Carrinho.push(compra); 
        }
    }
    return Carrinho;
}

export { cadastrarCarrinho };