let pasoActual = 0;

function iniciarFormulario() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("cotizador").style.display = "block";
  pasoActual = 1;
}

function siguientePaso(paso) {
  const formulario = document.querySelector(`#form-paso-${pasoActual}`);
  if (formulario && !formulario.checkValidity()) {
    formulario.reportValidity();
    return;
  }
  if (paso === 4) {
    mostrarResumen();
  }
  document.getElementById(`paso-${pasoActual}`).style.display = 'none';
  document.getElementById(`paso-${paso}`).style.display = 'block';
  pasoActual = paso;
}

function pasoAnterior(paso) {
  document.getElementById(`paso-${pasoActual}`).style.display = 'none';
  document.getElementById(`paso-${paso}`).style.display = 'block';
  pasoActual = paso;
}

function mostrarResumen() {
  document.getElementById('resumen-basicos').innerText = 
    `Dimensiones: ${document.getElementById('dimensiones').value}, Peso: ${document.getElementById('peso').value} kg, 
    Origen: ${document.getElementById('origen').value}, Destino: ${document.getElementById('destino').value}`;
  document.getElementById('resumen-envio').innerText = 
    document.querySelector('input[name="envio"]:checked').value;
  document.getElementById('resumen-remitente').innerText = 
    document.getElementById('nombre-remitente').value;
  document.getElementById('resumen-destinatario').innerText = 
    document.getElementById('nombre-destinatario').value;
}

function finalizar() {
  siguientePaso(5);
}
