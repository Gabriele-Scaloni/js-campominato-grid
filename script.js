/*  creo un prompt chiedendo il livello di difficoltà 
richiamo il contenitore (dell'html) per assegnargli una costante
creo un ciclo for per creare i quadrati
    scrivo i numeri all'interno dei quadrati dandogli display none
    adatterò la tabella creata in base alla difficoltà scelta dallo user
creo una funzione mi permetterà di togliere un display con un click
*/

let domandaIniziale = prompt("scegli la difficltà tra 1, 2 o 3"); 

if (domandaIniziale == 1) {
 alert("difficoltà 3, bassa");
} else if  (domandaIniziale == 2) {
 alert("difficoltà 2, media") ;
} else if (domandaIniziale == 3) {
 alert("difficoltà 1, massima") ;
}

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


