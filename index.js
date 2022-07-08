import {Financiamento} from "./Financiamento.js";
import {FinanciamentoCarencia} from "./financiamentocarencia.js";

//instanciar objetos através de seletores do html
const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

//função paralimpar o input
function limpaInput(){
    textoValor.value = '';
    textoEntrada.value = '';
    textoTaxaJuros.value = '';
    textoPrazo.value = '';
}
//função para limpar a tabela para nova simulação
function limpaCorpoTabela(){
    while(corpoTabela.firstChild){
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}
//esconder e mostrar a Lista Suspensa da Carência
comCarencia.addEventListener('change', function(){
    if(this.checked){
        listaSuspensa.removeAttribute('hidden');
    } else{
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
});
 
//acionar o botão calcular
botaoCalcular.addEventListener('click', function(){
    limpaCorpoTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if(comCarencia.checked){
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else{
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
    limpaInput();  
});
