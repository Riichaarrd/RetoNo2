let counter = 0;

// Define buttonctn to reference the container
const buttonctn = document.querySelector(".button-container");

const decrementbutton = buttonctn.querySelector(".decrement");
const incrementbutton = buttonctn.querySelector(".increment");
const counterValue = buttonctn.querySelector(".counter-value");

// Add cursor pointer to buttons
decrementbutton.style.cursor = 'pointer';
incrementbutton.style.cursor = 'pointer';

decrementbutton.addEventListener('click', () => {
    if (counter > 0) { // Change condition to allow decrementing to zero
        counter--;
        counterValue.textContent = counter;
    } else {
        initializeButton(newButton);
    }
});

incrementbutton.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

// MODAL FUNCTION
function abrirModal(imagen) {
    let modal = document.getElementById("modal");
    let imagenModalPrincipal = document.getElementById("imagenModalPrincipal"); // Imagen principal del modal

    // Muestra el modal
    modal.classList.remove("hidden");

    // Actualiza la imagen principal del modal con la imagen seleccionada
    imagenModalPrincipal.src = imagen.src.replace("-thumbnail", ""); // Reemplaza la versión pequeña por la grande
}

function cerrarModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Cierra el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
};




