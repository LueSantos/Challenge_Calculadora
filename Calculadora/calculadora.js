// Função de declaração do programa(tudo tem que estar dentro );
const calculadora = () => {
  // Declarações das entradas de informações que o usuário digita no teclado. Não esquecer quando o valor é númerico. Tem que declar o tipo NUMBER para o uso do (prompt()..); entre parenteses;
  let operacao = Number(
    prompt(
      'Escolha a operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão (/)\n 5 - divisao_Inteiros (%)\n 6 - potenciação (**)',
    ),
  );

  // Esssa condição verifica e bloqueia digitações inválidas da CONST-operacao. Caso seja verdadeira ela executa a condição; Se for falsa a calculadora continua sendo executada normalmente;
  if (!operacao || operacao >= 7) {
    alert('Operação inválida!');
    calculadora();
  }else {
    //Capturando os valores para os cálculos inseridos pelo usuário
    let n1 = Number(prompt('Insira o 1º valor'));
    let n2 = Number(prompt('Insira o 2º valor'));
    let resultado;

    // Funções dos cálculos matématicos
    let soma = () => {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      novaOp();
    };

    let subtração = () => {
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`);
      novaOp();
    };

    let multiplicação = () => {
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`);
      novaOp();
    };

    let divisão = () => {
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
      novaOp();
    };

    let divisaoInteira = () => {
      resultado = n1 % n2;
      alert(`O resto da divisão entre ${n1} e  ${n2} é igual a ${resultado}`);
      novaOp();
    };

    let potenciação = () => {
      resultado = n1 ** n2;
      alert(` ${n1} elevado a ${n2}ª é igual a ${resultado}`);
      novaOp();
    };

 
  }

    //Pergunta ao user se quer continuar calculando ou sair do programa após uma execução de cálculo
    let novaOp = () => {
      let opcao = prompt(
        `Deseja realizar outra operação?\n 1 - SIM \n 2 - NÃO`,
      );

      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert('Até a próxima! ;)');
      } else {
        alert('Digite uma opção válida!');
        novaOp();
      }

      /* Condição direta para saída do programa 

     if (!opcao ==1){
      alert('Até a próxima!');
    }else{
      calculadora();
    }  */
    };

    //Substitui o (if e else) deixando o codigo mais clean e chamando diretamente a função de cada operação;

    switch (operacao) {
      case 1:
        soma();
        break;

      case 2:
        subtração();
        break;

      case 3:
        multiplicação();
        break;
      case 4:
        divisão();
        break;

      case 5:
        divisaoInteira();
        break;

      case 6:
        potenciação();
        break;
    }
  };

calculadora();
