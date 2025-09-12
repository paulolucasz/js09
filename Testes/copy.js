// const aluno1 = {
//     nome: "Arthur",
//     nota: "9.0",
//     mat: "596126",
// }

// const aluno2 = aluno1;
// aluno2.nota = 2;

// // ... o conteúdo de ambas as variáveis muda
// console.log("\n Após mudar a nota só da varíavel 'aluno2':")
// console.log("Aluno1", aluno1);
// console.log("Aluno2", aluno2);

// function zeraNota(aluno){
// aluno.nota= 0;
// }

// zeraNota(aluno1)

// // Cópia rasa
// const aluno4 = { ... aluno1};

// // Cópia profunda
// const aluno3 = structuredClone(aluno1);

const aluno1 = {
    nome: "Arthur",
    nota: 9.0,
    mat: 596126,
}

const aluno2 = aluno1;
aluno2.nota = 2;

console.log("\nApós mudar a nota só da variável 'aluno2':");
console.log("Aluno1:", aluno1);
console.log("Aluno2:", aluno2);

function zeraNota(aluno) {
    aluno.nota = 0;
}

zeraNota(aluno1);

console.log("\nApós zerar a nota do aluno1:");
console.log("Aluno1:", aluno1);
console.log("Aluno2:", aluno2);

// Cópia rasa
const aluno4 = { ...aluno1 };
aluno4.nota = 7;

console.log("\nApós mudar a nota de aluno4 (cópia rasa):");
console.log("Aluno1:", aluno1);
console.log("Aluno4:", aluno4);

// Cópia profunda
const aluno3 = structuredClone(aluno1);
aluno3.nota = 10;

console.log("\nApós mudar a nota de aluno3 (cópia profunda):");
console.log("Aluno1:", aluno1);
console.log("Aluno3:", aluno3);


const alunoFactory = () => {
    return {
        nome: nome,
        nota: 0,
        mat: mat,
    }
}