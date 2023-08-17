
export class Cardapio {
    codigo;
    descricao;
    valor;

    constructor(codigo, descricao, valor){
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
    }

    descrever(){
        console.log(`codigo: ${this.codigo} - descrição: ${this.descricao} - valor: ${this.valor}`);
    }
}

export function criarCardapio(){

    const cafe = new Cardapio("cafe", "Café", 3.00);
    const chantily = new Cardapio( "chantily", "Chantily (extra do Café)", 1.50);
    const suco = new Cardapio("suco", "Suco Natural", 6.20);
    const sanduiche = new Cardapio("sanduiche", "Sanduíche", 6.50);
    const queijo = new Cardapio( "queijo", "Queijo (extra do Sanduíche)", 2.00);
    const salgado = new Cardapio( "salgado", "Salgado", 7.25);
    const combo1 = new Cardapio( "combo1", "1 Suco e 1 Sanduíche", 9.50);
    const combo2 = new Cardapio( "combo2", "1 Café e 1 Sanduíche", 7.50);
    
    const cardapioInteiro = [];
    cardapioInteiro.push(cafe);
    cardapioInteiro.push(chantily);
    cardapioInteiro.push(suco);
    cardapioInteiro.push(sanduiche);
    cardapioInteiro.push(queijo);
    cardapioInteiro.push(salgado);
    cardapioInteiro.push(combo1);
    cardapioInteiro.push(combo2);
    
    return cardapioInteiro;
}

export function conferirItem(codigoItem){
    const item = new Cardapio();
    for (const element of Cardapio) {
        if (codigoItem === element.codigo){
            item.codigo = codigoItem;
            item.descricao = element.descricao;
            item.valor = element.valor;
        }
    }
    return item;
}

export { conferirItem };
