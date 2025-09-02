const prompt = require('prompt-sync')();

// function perguntaIdade () {
// 	const idade = prompt('Qual é a idade? '); 
// 	return idade;
// }

// const idadeDoAnimal = perguntaIdade();

// console.log(`A idade do animal é: ${idadeDoAnimal} anos`);

// const calcularIdadeAjustada = (idadeAntig) => {
//     const idadeVerdadeira = idadeAntig * 7;
//     return idadeVerdadeira;

// }

// const resultado = calcularIdadeAjustada(idadeDoAnimal)

// console.log(resultado)

let gatos = [];

function cadastrarGatos() {
    let quantidadeDeGatos = prompt('Quantos gatos você tem? ');
    let numerosDeGatos = parseInt(quantidadeDeGatos);

    for (let i = 0; i < numerosDeGatos; i++) {
        gatos[i] = prompt(`Qual é a idade do gatinho ${i + 1}: `);
    }

    gatos.forEach((gato, indice) => {
        console.log(`A idade do gatinho ${indice + 1} é ${gato}`);
    });
}

cadastrarGatos();
