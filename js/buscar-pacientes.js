var botaoPesquisar = document.querySelector("#buscar-pacientes");

botaoPesquisar.addEventListener("click", function(){
	console.log("Buscando pacientes...");

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){


	if ( xhr.status == 200 ) {

		resposta = xhr.responseText;
		console.log("Sucesso!");

		var pacientes = JSON.parse(resposta);


		
		for (var i = 0 ; i < pacientes.length ; i++) {
			paciente = pacientes[i];
			//console.log(paciente);
			var pacienteTr = montaTr(paciente);

			montaTd(paciente, pacienteTr);

			montaTabela(pacienteTr);

		}

		var sucesso = "Pacientes adicionados com sucesso";
		exibeMensagemSucessoAjax(sucesso);

	} else {
		var erro = ("ERRO " + xhr.status + ": A requisição não pode ser completada...");
		exibeMensagemErroAjax(erro);
		console.log("STATUS: " + xhr.status);
		console.log("RESPOSTA: " + xhr.responseText);
	}	
		

	});

	xhr.send();
});

function exibeMensagemErroAjax(erro) {
	var ulErroAjax = document.querySelector("#mensagem-status-ajax");


	var liErroAjax = document.createElement("li");
		liErroAjax.textContent = erro;
		liErroAjax.classList.add("mensagem-erro-ajax");
		ulErroAjax.appendChild(liErroAjax);
}

function exibeMensagemSucessoAjax(sucesso) {
	var ulSucessoAjax = document.querySelector("#mensagem-status-ajax");


	var liSucessoAjax = document.createElement("li");
		liSucessoAjax.textContent = sucesso;
		liSucessoAjax.classList.add("mensagem-sucesso-ajax");
		ulSucessoAjax.appendChild(liSucessoAjax);

		setTimeout( function () {
			ulSucessoAjax.classList.add("fadeOut");
		}, 6000);

		setTimeout( function () {
		ulSucessoAjax.remove();
		}, 6500);


}