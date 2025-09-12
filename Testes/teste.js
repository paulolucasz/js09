// Objeto `dono` que já tínhamos
const dono = {
    nome: "Vasco",
    celular: "2148418565",
};

// Objeto `animal` com as novas propriedades e o método
const animal = {
    nome: "Bruno",
    especie: "Papagaio",
    raca: "Rabugento",
    idade: "75",

    // 1. Array de datas das consultas
    consultas: [
        "15/09/2025",
        "23/10/2025",
        "10/12/2025"
    ],

    // 2. Objeto com os dados do dono
    dono: dono,

    // 3. Método para verificar as consultas
    verificarConsultas: function() {
        console.log(`Verificando consultas para ${this.nome}...`);

        // Verifica se o array 'consultas' tem algum item
        if (this.consultas.length > 0) {
            console.log("Consultas marcadas encontradas:");
            // Itera sobre cada item do array e imprime
            this.consultas.forEach(data => {
                console.log(`- ${data}`);
            });
        } else {
            // Caso o array esteja vazio
            console.log("Nenhuma consulta encontrada.");
        }
    }
};

// --- TESTANDO O CÓDIGO ---

// 1. Teste com consultas marcadas
animal.verificarConsultas();

console.log("---------------------------------");

// 2. Teste sem nenhuma consulta (simulando um array vazio)
animal.consultas = []; // Esvaziamos o array de consultas
animal.verificarConsultas();