const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const form = document.getElementById('formIMC');
const resultado = document.getElementById('resultado');


form.addEventListener('submit', function (event) {
    event.preventDefault(); const alturaMetros = Number(altura.value / 100);
    const imc = Number(peso.value) / (alturaMetros * alturaMetros);
    let mensagem = '';
    if (imc < 18.5) {
        mensagem('Abaixo do Peso');

    }
    else if (imc < 25) { mensagem = 'Peso Normal'; }

    else if (imc < 30) {
        mensagem = 'Sobrepeso';

    }
    else if (imc < 35) {
        mensagem = 'Obesidade Grau 1';

    }
    else if (imc < 40) {
        mensagem = 'Obesidade Grau 2';

    }
    else {
        mensagem = 'Obesidade Grau 3';

    }
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} ${mensagem}`;
    if (imc >= 18.5 && imc < 25){
        resultado.className = 'resultado-verde';
    }else {
        resultado.className = 'resultado-vermelho'
    }
    resultado.style.display = 'block'
});
//console.log(peso.value);console.log(alturaMetros);
//console.log(imc)});
