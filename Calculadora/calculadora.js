//Carregando a page e colocando os botões para funcionar
onload = () => {
  document.querySelector('#btn-0').onclick = () => digito(0);
  document.querySelector('#btn-1').onclick = () => digito(1);
  document.querySelector('#btn-2').onclick = () => digito(2);
  document.querySelector('#btn-3').onclick = () => digito(3);
  document.querySelector('#btn-4').onclick = () => digito(4);
  document.querySelector('#btn-5').onclick = () => digito(5);
  document.querySelector('#btn-6').onclick = () => digito(6);
  document.querySelector('#btn-7').onclick = () => digito(7);
  document.querySelector('#btn-8').onclick = () => digito(8);
  document.querySelector('#btn-9').onclick = () => digito(9);

  document.querySelector('#btn-virgula').onclick = () => virgula();
  document.querySelector('#btn-ac').onclick = () => limpar();

  document.querySelector('#bt-porcento').onclick = () => operador('%');
  document.querySelector('#bt-divisao').onclick = () => operador('/');
  document.querySelector('#bt-multi').onclick = () => operador('*');
  document.querySelector('#bt-subtrair').onclick = () => operador('-');
  document.querySelector('#bt-soma').onclick = () => operador('+');
  document.querySelector('#bt-igual').onclick = () => calcula('=');
};

//Variaveis para armazenar o valor, o operador e o estado da calculadora
let visor = '0'; // valor apresentado no display
let novoNun = true; // indica se o proximo digito será de novo numero
let valorAnterior = 0; // valor acumulado para uma operação
let operacaoPendente = null; // operações exibidas no visor

const atualizarVisor = () => {
  //Tratamento para limitar a quantidade de dígitos;
  let [parteInteira, parteDecimal] = visor.split(',');
  if (parteInteira.length > 10) {
    document.querySelector('#display').innerText = 'Error';
    return;
  }

  //
  let v = '';
  c = 1;
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (c++ > 3) {
      v = '.' + v;
      c = 2;
    }
    v = parteInteira[i] + v;
  }
  v = v + (parteDecimal ? ',' + parteDecimal.substr(0, 10 - v.length) : '');
  document.querySelector('#display').innerText = v;
};

// Tratamento do click no botão de dígito
const digito = (n) => {
  if (novoNun) {
    visor = '' + n;
    novoNun = false;
  } else {
    visor += n;
    atualizarVisor();
  }
};

// Tratamento do click no botão decimal add vígula
virgula = () => {
  if (novoNun) {
    visor = '0,';
    novoNun = false;
  } else if (visor.indexOf(',') == -1) visor += ',';
  atualizarVisor();
};

// Tratamento do click no AC (all clear)
limpar = () => {
  novoNun = true;
  valorAnterior = 0;
  visor = '0';
  operacaoPendente = null;
  atualizarVisor();
};
//Converte a string do valor para um numero real
valorAtual = () => parseFloat(visor.replace(',', '.'));

//Função das operações matemáticas
operador = (op) => {
  calcula();
  valorAnterior = valorAtual();
  operacaoPendente = op;
  novoNun = true;
};

// Tratamento no click dos botões de operadores
const calcula = () => {
  if (operacaoPendente != null) {
    let resultado;
    switch (operacaoPendente) {
      case '%':
        resultado = (valorAnterior * valorAtual()) / 100;
        break;
      case '/':
        resultado = valorAnterior / valorAtual();
        break;
      case '*':
        resultado = valorAnterior * valorAtual();
        break;
      case '-':
        resultado = valorAnterior - valorAtual();
        break;
      case '+':
        resultado = valorAnterior + valorAtual();
        break;
    }
    visor = resultado.toString().replace('.', ',');
  }
  novoNun = true;
  operacaoPendente = null;
  valorAnterior = 0;
  atualizarVisor();
};
