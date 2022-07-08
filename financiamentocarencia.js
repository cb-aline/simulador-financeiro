import {Financiamento} from "./Financiamento.js";
import {Parcela} from "./Parcela.js";

export class FinanciamentoCarencia extends Financiamento{
    #carencia;
    #taxaJuros;
    #parcelasFC = [];
    constructor(valor, entrada, taxaJuros, prazo, carencia){
        super(valor, entrada, taxaJuros, prazo);
        this.#taxaJuros = taxaJuros;
        this.#parcelasFC = super.getParcelas();
        this.#carencia = carencia;
    } 
 
    calcParcelasMensais(){
        let saldo = this.#parcelasFC[0].getSaldo();
        for(let i=0; i<this.#carencia; i++){
            const numero = this.#parcelasFC.length;
            saldo += Financiamento.calcJuros(saldo, this.#taxaJuros);
            this.#parcelasFC.push(new Parcela(numero,0,0,0,saldo));
        }
        super.calcParcelasMensais();
    }
}