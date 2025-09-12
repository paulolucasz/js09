const notas = [5 , 10 ,15]
console.log(notas);
notas.push (41);
console.log(notas);
notas [14] = 20;
console.log(notas.reverse())

// notas.forEach( Element => {
   // console.log(`Elemento e ${Element}`)
// }) 




console.log(notas);
notas.push(41); //adiciona elemento
notas[1] = 20; //substitui por esse valor na posição 1
console.log(notas.reverse()); //muda de ordem
const fun = (el) => {
};
notas.forEach(element => {
    console.log(`Elemento e ${element}`)
}); //recebe função como argumento

function calcularIdadeAjustada (idadeOrig) {
    return idadeOrig*7;
}
const gatos = [];
gatos.push(2, 10, 12);
console.log(gatos);
gatos.forEach(el => {
    const resul = calcularIdadeAjustada(el);
    console.log("Idade dos gatos ajustada:", resul);
})


