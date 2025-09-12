const pets = [
    { nome: "Fifi", idade: 12, especie:"Cachorro",raca:"Labrador"},
    { nome: "Bugaosh", idade: 2, especie:"Cachorro",raca:"SRD"},
    { nome: "Lihasd", idade: 3, especie:"Gato",raca:"Frajola"}
]

const container = document.getElementById("lista");

pets.forEach(pet => {
    const newEl = document.createElement("div");
    container.appendChild(newEl);
    const newNome = document.createElement("h3");
    const newIdade = document.createElement("h3");
    const newEspecie = document.createElement("h3");
    newEl.appendChild(newNome);
    newEl.appendChild(newIdade);
    newEl.appendChild(newEspecie);
    newNome.innerText= pet.nome;
    newIdade.innerText = pet.idade;
    newEspecie.innerText = pet.especie; 
    newEl.style.border = "black solid 2px";
})