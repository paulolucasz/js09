const animal = {
    consultas: [
        "08/08/2023",
        "10/08/2028",
        "18/08/2021",
    ],
    nome: "Bruno",
    especie: "Papagaio",
    raca: "Rabugento",
    idade: "75",  
    dono: {
        nome: "Vasco",
        celular: "2148418565",
    }, 
    
    verificarConsultas() {
            console.log(`Consultas marcadas para ${this.nome} `)
            if (this.consultas.length > 0){
                this.consultas.forEach(data => {
                    console.log(`- ${data}`);
                });
            }

            else {
                console.log("Não tem consultas marcadas");
            }
    }
}

animal.verificarConsultas();

// console.log(animal);



//  const turma = {
//  curso: "React",
//  alunos: ["John Coltrane","Miles Davis","Charles Mingus"]

//  }

//  console.log("\nAlunos na turma:");
//      turma.alunos.forEach( a =>
//      console. log(`:) ${a}` )
//  );
