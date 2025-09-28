// llamado a los elementos del DOM
/*
document.addEventListener("DOMContentLoaded", function() {
    // botón de menú hamburguesa
    //getElementById es una funcion que obtiene un elemento del DOM por su ID
    const btnHamburguesa = document.getElementById("btnHamburguesa");

    // menú de opciones
    //getElementById es una funcion que obtiene un elemento del DOM por su ID
    const menuOpciones = document.getElementById("menuOpciones");

    // evento click en el botón de menú hamburguesa
    //addEventListener es una funcion que agrega un evento a un elemento del DOM
    btnHamburguesa.addEventListener("click", function(e) {
        // evitar que el clic se propague
        //stopPropagation es una funcion que evita que el evento se propague a otros elementos
        e.stopPropagation();

        // alternar la visibilidad del menú
        //style es una propiedad que permite modificar el estilo de un elemento del DOM
        menuOpciones.style.display = (menuOpciones.style.display === "block") ? "none" : "block";
    });

    // cerrar el menú si se hace clic fuera de él
    //addEventListener es una funcion que agrega un evento a un elemento del DOM
    document.addEventListener("click", function(e) {
        // si el clic no es en el botón ni en el menú, cerrar el menú
        //contains es una funcion que verifica si un elemento contiene a otro
        if (!btnHamburguesa.contains(e.target) && !menuOpciones.contains(e.target)) {
            // ocultar el menú
            //style es una propiedad que permite modificar el estilo de un elemento del DOM
            menuOpciones.style.display = "none";
        }
    });
}); */

//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("btnHamburguesa");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});