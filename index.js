const prompt = require ('prompt-sync')();

function perguntaIdade () {
	const idade = prompt('Qual é a idade? '); 
	return idade;
}

const idadeDoAnimal = perguntaIdade();

console.log(`A idade do animal é: ${idadeDoAnimal} anos`);

const calcularIdadeAjustada = (idadeAntig) => {
    const idadeVerdadeira = idadeAntig * 7;
    return idadeVerdadeira;

}

const resultado = calcularIdadeAjustada(idadeDoAnimal)

console.log(resultado)

