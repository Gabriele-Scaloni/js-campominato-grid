/*  creo un prompt chiedendo il livello di difficoltà 
richiamo il contenitore per assegnargli una costante
creo un ciclo per creare i quadrati
    scrivo i numero all'interno dandogli display none
adatto il n di quadrati in base alla difficoltà inserita dall'user
creo una funzione mi permetterà di togliere un display con un click
*/

let domandaIniziale = prompt("scegli la difficltà tra 1, 2 o 3");  

let levels = 100; //di default, in base a quante volte divido il contenitore

 if (domandaIniziale == 1) {
    levels = 100;
} else if  (domandaIniziale == 2) {
    levels = 81;
} else if (domandaIniziale == 3) {
    levels = 49;
} else if (domandaIniziale > 3 ||domandaIniziale < 1) {
    alert("riprova, i livelli sono da 1 a 3 ")
    levels = 0;
}

const contenitore = document.getElementById("cont");

 for (let i = 0; i < levels; i++) {

    let newElement = newSquare ("div", "square");
    newElement.addEventListener("click",

    function(){
        newElement.classList.add("clickOneTime");
    });

    contenitore.appendChild(newElement);
   //errore /*  contenitore.innerHTML+= `<div class="square">${i+1}</div>`; */
    console.log(contenitore);
    
}



function newSquare (elemento, quadratoNuovo) {
    let node = document.createElement(elemento);
    node.classList.add(quadratoNuovo);
    return node
}