/*
primitivos - string, number, boolean, undefined, null >> IMUTÁVEIS
              0123456789 
*/
/*>>>>>>let nome = 'Guilherme';
nome[0] = 'D' ;
console.log(nome[0]);>>> mesmo pedindo para trocar o valor da String
de G para D, ela não trocou pois é IMUTÁVEL.*/
/* Referência (mutável) - array, object, function
*/
let a = [1, 2, 3];
let b = a;
console.log(a, b);
a.push(4);// adicionando 1
console.log(a, b);

b.pop();//tirando 1 
console.log(a, b);
//>>>>>>>>>>>>> Qualquer alteração que fizer vai impactar em todo
// o resultado