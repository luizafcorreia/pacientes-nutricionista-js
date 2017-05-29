var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function() {
	//console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");
	//console.log(pacientes);
	if (this.value.length > 0) {
		for (var i = 0; i < pacientes.length; i++) {
		var paciente = pacientes[i];
		var tdNome = paciente.querySelector(".info-nome");
		var nome = tdNome.textContent;
		//console.log(nome);
		var expressao = new RegExp(this.value, "i");


		if (!expressao.test(nome)) {
			paciente.classList.add("invisivel");
		} 	else {
			paciente.classList.remove("invisivel");
			}
		}
	} else {
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}

	
});