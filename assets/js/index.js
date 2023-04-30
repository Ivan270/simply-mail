let formulario = document.getElementById('formCorreo');
let mails = document.getElementsByClassName('email');

const procesarDatos = (destinatario, titulo, mensaje, remitente, ...copias) => {
	console.log(
		`PARA: ${destinatario}\nTITULO: ${titulo}\nMENSAJE: ${mensaje}\nFROM: ${remitente}`
	);
	for (correo of copias) {
		if (correo.value !== '') {
			console.log(`CC: ${correo.value}`);
		}
	}
};

formulario.addEventListener('submit', (event) => {
	event.preventDefault();

	procesarDatos(
		inputPara.value,
		inputTitulo.value,
		inputMensaje.value,
		inputDe.value,
		...mails
	);
	// Fin acciones
	formulario.reset();
});
