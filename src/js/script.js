function validarFormulario(event) {
    event.preventDefault();
  
    var camposObrigatorios = document.querySelectorAll(".obrigatorio");
    var avisosCamposObrigatorios = document.querySelectorAll(".aviso.oculto");
  
    camposObrigatorios.forEach((campo, index) => {
      if (campo.value.trim() === "") {
        campo.classList.remove("bordaGreen");
        campo.classList.add("bordaRed");
        avisosCamposObrigatorios[index].classList.remove("oculto");
      } else {
        campo.classList.remove("bordaRed");
        campo.classList.add("bordaGreen");
        avisosCamposObrigatorios[index].classList.add("oculto");
      }
    });
  }
  
  var botaoEnviar = document.querySelector(".botao");
  botaoEnviar.addEventListener("click", validarFormulario);
  
  var campos = document.querySelectorAll(".campo");
  
  campos.forEach((campo) => {
    campo.addEventListener("keyup", () => {
      if (campo.value.trim() !== "") {
        campo.classList.remove("bordaRed");
        campo.classList.add("bordaGreen");
        campo.nextElementSibling.classList.add("oculto");
      } else {
        campo.classList.remove("bordaGreen");
        campo.classList.add("bordaRed");
        campo.style.borderColor = "initial";
      }
    });
  });