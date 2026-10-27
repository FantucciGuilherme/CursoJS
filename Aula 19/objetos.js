//const pessoa1 = {
//nome: 'Guilherme',
//sobrenome: 'Nadaletti',
//idade: 34
//};
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome); 
// teria que adicionar muitas coias para falar peessoa por pessoa.
function criaPessoa (nome, sobrenome, idade){
    return {
        nome,sobrenome, idade  
  };
}

const pessoa1 = criaPessoa('Guilherme', 'Nadaletti', 34);
const pessoa2 = criaPessoa("Samantha", "Abdala", 28);
const pessoa3 = criaPessoa('Antony', 'Fantucci', 3);
const pessoa4 = criaPessoa('Angelo', 'Fantucci', 0.9);
console.log(pessoa1.nome, pessoa1.sobrenome);

// usando this> ela chama e consegue utilizar na função