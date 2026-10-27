/*
&& -> False && true-> false "o valor mesmo"
|| -> true || false>> vai retornar o valor "o valor verdadeiro"
*/

//console.log('Guilherme Fantucci' && 0 && 'Samantha');
//>>> retorna 0 porque encontrou o falso entre a expressão
//console.log ('Guilherme Fantucci' && true &&'Samantha');
//>> Retorna Samantha, pois passou por todos os itens e não 
//encontrou nenhum falso, portanto mostra o ultimo item verificado

console.log(0 || false || null || 'Guilherme Fantucci' || true);
