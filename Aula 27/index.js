//const tresHoras = 6 * 60 * 60 * 1000;  // 3 horas em milissegundos  
//const umDia = 24 * 60 * 60 * 1000; // 1 Dia em milissegundos
//const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
// Existem formas de se fazer isto, Acima sempre separado com virgula para mostrar
// Exemplo: a, m, d, h, m, s, ms ; ano, mesn, dia, hora, minuto, segundo, milisegundo
// ou fazer em formato string, como abaixo
//const data = new Date('2026-10-28 10:37');
// LEMBRANDO QUE AQUI JANEIRO É = 0 E DEZEMBRO É = 11, E NÃO DE 1 A 12 COMO ESTAMOS ACOSTUMADOS
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`; //Data atual estilo Brasileiro
}

// O VS não mostra zero à esquerda, mas o console sim, então para mostrar o zero à esquerda, é necessário criar uma função para isso, como acima
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);



