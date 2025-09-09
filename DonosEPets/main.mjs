import { criarDono } from './donos.mjs';
import { criarPet, animal } from './pets.mjs';

const dono1 = criarDono("Paulo", "2159951542");
const animal1 = criarPet("Richard", "Cachorro", "PitBull", 25, dono1);

console.log("Dono:");
console.log(dono1);

console.log("\nAnimal criado:");
console.log(animal1);

console.log("\nConsultas do animal criado:");
animal1.verificarConsultas();

console.log("\nConsultas do animal exemplo:");
animal.verificarConsultas();
