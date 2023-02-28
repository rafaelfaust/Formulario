function validarFormulario(event) {
    event.preventDefault();
  
    var camposObrigatorios = document.querySelectorAll(".obrigatorio");
    var avisosCamposObrigatorios = document.querySelectorAll(".aviso.oculto");
  
    camposObrigatorios.forEach((campo, index) => {
      if (campo.value.trim() === "") {
        campo.classList.remove("tudoOk");
        campo.classList.add("nadaOk");
        avisosCamposObrigatorios[index].classList.remove("oculto");
      } else {
        campo.classList.remove("nadaOk");
        campo.classList.add("tudoOk");
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
        campo.classList.remove("nadaOk");
        campo.classList.add("tudoOk");
        campo.nextElementSibling.classList.add("oculto");
      } else {
        campo.classList.remove("tudoOk");
        campo.classList.add("nadaOk");
        campo.style.borderColor = "initial";
      }
    });
  });