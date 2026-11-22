
// MENSAJE DE BIENVENIDA
function mostrarBienvenida() {
    alert("¡Bienvenido a ComfaBot! Automatización inteligente para tu empresa.");
}

// VALIDAR FORMULARIO
function enviarMensaje(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("¡Gracias " + nombre + "! Tu mensaje fue registrado en esta demostración.");

    document.getElementById("formulario").reset();
}

// MOSTRAR BIENVENIDA AL CARGAR
console.log("ComfaBot se encuentra funcionando correctamente.");
