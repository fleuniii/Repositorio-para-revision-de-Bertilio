
document.addEventListener('DOMContentLoaded', function() {
    console.log("El script JavaScript ha sido cargado y el DOM esta listo.");


    const parrafo = document.querySelector('p');


    if (parrafo) {

        parrafo.style.color = "blue";


        parrafo.style.fontSize = "20px";

  
        parrafo.style.border = "1px solid green";
        parrafo.style.padding = "10px";
        parrafo.style.backgroundColor = "#e0ffe0"; 
        console.log("Estilos del parrafo cambiados por JavaScript.");
    } else {
        console.log("No se encontro ningún parrafo en el documento HTML.");
    }


    setTimeout(function() {
        alert("¡Hola desde tu pagina web con JavaScript!");
    }, 2000);
});