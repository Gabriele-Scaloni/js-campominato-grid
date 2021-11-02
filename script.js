/*  creo un prompt chiedendo il livello di difficoltà 
richiamo il contenitore per assegnargli una costante
creo un ciclo per creare i quadrati
    scrivo i numero all'interno dandogli display
    che in fine spero adatterò in base alla difficoltà inserita dall'user
creo una funzione mi permetterà di togliere un display con un click
*/



// let domandaIniziale = prompt("scegli la difficltà tra 1, 2 o 3");

const contenitore = document.getElementById("cont");

for (let i = 0; i < 100; i++) {

    let newElement = newSquare ("div", "square");

    newElement.addEventListener("click",
    function(){
        newElement.classList.add("clickOneTime");

    });
    contenitore.appendChild(newElement);
}


function newSquare (elemento, quadratoNuovo) {
    let node = document.createElement(elemento);
    node.classList.add(quadratoNuovo);
    return node
}


newElement.addEventListener("click");


