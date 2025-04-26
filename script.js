document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Limpia mensajes de error previos
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(el => el.textContent = "");

    // Obtén los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value;
    const conferencias = document.querySelectorAll('input[name="conferencias"]:checked'); // Checkboxes seleccionados

    let isValid = true; // Bandera para verificar si el formulario es válido

    // Validación de campos obligatorios
    if (!nombre) {
        document.getElementById("nombreError").textContent = "El campo 'Nombre Completo' es obligatorio.";
        isValid = false;
    }

    if (!correo) {
        document.getElementById("correoError").textContent = "El campo 'Correo Electrónico Institucional' es obligatorio.";
        isValid = false;
    } else {
        // Validación del formato del correo electrónico con dominio @uamv.edu.ni
        const correoRegex = /^[^\s@]+@uamv\.edu\.ni$/;
        if (!correoRegex.test(correo)) {
            document.getElementById("correoError").textContent = "Por favor, ingrese un correo electrónico válido con el dominio @uamv.edu.ni.";
            isValid = false;
        }
    }

    if (!carrera) {
        document.getElementById("carreraError").textContent = "Debe seleccionar una carrera.";
        isValid = false;
    }

    // Validación de selección de al menos un evento
    if (conferencias.length === 0) {
        document.getElementById("conferenciasError").textContent = "Debe seleccionar al menos un evento.";
        isValid = false;
    }

    // Si todas las validaciones pasan, muestra un mensaje de confirmación
    if (isValid) {
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Formulario enviado con éxito. ¡Gracias por registrarte!";
        successMessage.style.color = "green";
        this.reset(); // Limpia el formulario
    }
});