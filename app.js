// variables

let AA = agregarAmigo();

// nombres
function asignarTextoElemento(elemento, texto){
 let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML = texto;
 return;
}  

asignarTextoElemento("h1","Tu amigo secreto te espera");
asignarTextoElemento("h2","coloque nombres de los participantes");

//botones

  //añadir

let ar = [];
function agregarAmigo() {

    let AA = document.getElementById("amigo").value.trim() ;
    if (AA !=="") {
        ar.push(AA);

    console.log(ar);
} else {
    console.log("no se puede agregar nombre vacío.");
}

    limpiarcaja();
} 
   

function limpiarcaja() {
    document.querySelector("#amigo").value = "";
   } 


  //iniciar sorteo
  
function sortearAmigo() { 
    
if (ar.length === 0) {
    asignarTextoElemento("h2","acabo el sorteo.");
   console.log("acabo el sorteo");
   return;
}

let tinka = Math.floor(Math.random()*ar.length);
let seleccionado = ar[tinka];

console.log("seleccionado:" + seleccionado);

ar.splice(tinka,1);



    asignarTextoElemento("h2",seleccionado);
 } 
