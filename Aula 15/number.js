// contas em JavaScript segue padrão IEE 754-2008
let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 = ((num1 * 100) + (num2 * 100)) /100 ; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) /100 ; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) /100 ; // 1.0

console.log(num1 ); // resultado
console.log(Number.isInteger(num1)); // se ele é um número inteiro
//console.log( num1.toString() + num2);>>>> passando o numero um para uma string
//console.log(typeof num1);>>> Ele não deixou de ser um número, somente na linha de cima se tornou uma sting
//console.log(num1.toString(2));>> usando o número 2 em parenteses ele passou a mostrar o número em binário
//console.log(num1.toFixed(2));>> quando o número possui muitas casas decimais, mostra quantas casas decimais queremos mostrar
//console.log(Number.isInteger(num1));>> mostra se o número é inteiro ou não. True (sim), false(não)
//let temp = num1 * '5';>> colocando temp fazemos uma variável temporária
//console.log(temp);