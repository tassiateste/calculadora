let operacao = prompt("Escolha uma operação aritmética entre adição, subtração, multiplicação ou divisão.");

let numeroUm = prompt(`Digite o primeiro número da ${operacao}:`);

let numeroDois = prompt(`Digite o segundo número da ${operacao}:`);

function adicao() {

    let adicao = numeroUm + numeroDois;

    alert(`A adição entre ${numeroUm} e ${numeroDois} é ${adicao}.`);
}

function subtracao() {

    let subtracao = numeroUm - numeroDois;

    alert(`A subtração entre ${numeroUm} e ${numeroDois} é ${subtracao}.`);
}

function multiplicacao() {

    let multiplicacao = numeroUm * numeroDois;

    alert(`A multiplicação entre ${numeroUm} e ${numeroDois} é ${multiplicacao}.`);
}

function divisao() {

    let divisao = numeroUm / numeroDois;

    alert(`A divisão entre ${numeroUm} e ${numeroDois} é ${divisao}.`);
}

function escolhendoAOperacao() {

    if (operacao == "adição" || operacao == "Adição") {

            adicao();

    } else {

        if (operacao == "subtração" || operacao == "Subtração") {

                subtracao();

        } else {

            if (operacao == "multiplicação" || operacao == "Multiplicação") {

                    multiplicacao();

            } else {

                if (operacao == "divisão" || operacao == "Divisão") {

                        divisao();
                }
            }

        }

    }

}

escolhendoAOperacao();