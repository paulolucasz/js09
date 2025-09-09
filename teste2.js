const aluno1 = {
    nome: "Arthur",
    nota: "9.0",
    mat: "596126",
    historico: {
        ano1: "Aprovado",
        ano2: "Reprovado"
    }
}

// Cópia rasa
const aluno4 = { ...aluno1 };
// Cópia profunda
const aluno3 = structuredClone(aluno1);

aluno4.historico.ano1 = "Reprovado"; // Isso muda o objeto interno do aluno1 também!
aluno3.historico.ano1 = "Aprovado";  // Isso muda só aluno3, não afeta aluno1

console.log(aluno1.historico.ano1); // 'Reprovado' — mudou por causa da cópia rasa
console.log(aluno3.historico.ano1); // 'Aprovado' — independente da original
