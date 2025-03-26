document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nom");
    const email = document.getElementById("cor");
    const contraseña = document.getElementById("con");
    const confirmarContraseña = document.getElementById("ccon");
    const botonRegistro = document.getElementById("reg");
  
    const mostrarError = (input, message) => {
      const errorMsg = input.nextElementSibling;
      errorMsg.textContent = message;
      errorMsg.style.display = "block";
      input.style.borderColor = "red";
    };
  
    const valido = (input) => {
      const errorMsg = input.nextElementSibling;
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
      input.style.borderColor = "green";
    };
  
    const validarNombre = () => {
      if (nombre.value.trim().length < 3) {
        mostrarError(nombre, "El nombre debe tener al menos 3 caracteres.");
        return false;
      }
      valido(nombre);
      return true;
    };
  
    const validarEmail = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email.value.trim())) {
        mostrarError(email, "Introduce un correo válido.");
        return false;
      }
      valido(email);
      return true;
    };
  
    const validarContraseña = () => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regex.test(contraseña.value.trim())) {
        mostrarError(contraseña, "La contraseña tiene que tener mínimo 8 caracteres, al menos una letra y un número.");
        return false;
      }
      valido(contraseña);
      return true;
    };
  
    const validarConfirmarContraseña = () => {
      if (confirmarContraseña.value.trim() !== contraseña.value.trim()) {
        mostrarError(confirmarContraseña, "Las contraseñas no estarían coincidiendo");
        return false;
      }
      valido(confirmarContraseña);
      return true;
    };
  
    const validarForm = () => {
      if (validarNombre() && validarEmail() && validarContraseña() && validarConfirmarContraseña()) {
        botonRegistro.removeAttribute("disabled");
      } else {
        botonRegistro.setAttribute("disabled", "true");
      }
    };
  
    nombre.addEventListener("input", validarForm);
    email.addEventListener("input", validarForm);
    contraseña.addEventListener("input", validarForm);
    confirmarContraseña.addEventListener("input", validarForm);
  
    botonRegistro.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Ya estás registrado :)");
    });
  });
  