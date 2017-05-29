/** 
**
	Adição de paciente na tabela através do formulário
**
**/

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

	event.preventDefault(); // previne o comportamento padrão do botão, recebendo como parametro o evento "click"

	var form = document.querySelector("form"); // retorna o formulario

	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	montaTd(paciente, pacienteTr);

	var erros = validaPaciente(paciente);


	if (erros.length > 0) {
		
		exibeMensagensDeErro(erros);

		return;

	} 
		
	montaTabela(pacienteTr);

 	limpaFormulario(form);
	
});


	
// ::Declarações das funções::

function exibeMensagensDeErro(erros) {

	var ulMensagensDeErro = document.querySelector("#mensagens-erro");
		ulMensagensDeErro.innerHTML = "";
		
	//Utilizando foreach para varrer o vetor
	erros.forEach(function(erro){
		var liMensagemDeErro = document.createElement("li");
		liMensagemDeErro.textContent = erro;
		liMensagemDeErro.classList.add("mensagem-erro");
		ulMensagensDeErro.appendChild(liMensagemDeErro);

	});

}

function obtemPacienteDoFormulario (form) {

	// Criando o objeto paciente
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;

}



function montaTr (paciente) {

	var pacienteTr = document.createElement("tr"); // cria a <tr>
	pacienteTr.classList.add("paciente"); // adicionando a classe paciente à <tr>

	return pacienteTr;
}


function montaTd (paciente, pacienteTr) {		// cria as tds e insere o conteudo do objeto paciente

	var nomeTd = document.createElement("td"); // cria a <td>
	var pesoTd = document.createElement("td"); // ...
	var alturaTd = document.createElement("td"); // ...
	var gorduraTd = document.createElement("td"); // ...
	var imcTd = document.createElement("td"); // ...

	nomeTd.classList.add("info-nome"); // adicionando a classe info-xxx correspondente à <td>
	pesoTd.classList.add("info-peso"); // ...
	alturaTd.classList.add("info-altura"); // ...
	gorduraTd.classList.add("info-gordura"); // ...
	imcTd.classList.add("info-imc"); // ...

	//Inserindo o conteudo do formulario dentro das células
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	pacienteTr.appendChild(nomeTd); // adiciona a <td> na <tr>
	pacienteTr.appendChild(pesoTd); // ...
	pacienteTr.appendChild(alturaTd); // ...
	pacienteTr.appendChild(gorduraTd); // ...
	pacienteTr.appendChild(imcTd); // ...

}



function montaTabela (pacienteTr) {

	var tbody = document.querySelector("#tabela-pacientes"); // retorna a tag <tbody> de id = tabela-pacientes

	tbody.appendChild(pacienteTr); // adiciona a <tr> na <tbody>

}



function limpaFormulario (form) {
	form.reset();
	form.nome.focus();
	var ulMensagensDeErro = document.querySelector("#mensagens-erro");
		ulMensagensDeErro.innerHTML = "";
}



function validaPaciente (paciente) {

	var erros = [];


	if ( paciente.nome.length == 0 ) {
		erros.push("Nome não preenchido");
	}

	if ( !validaPeso(paciente.peso) ) {
		erros.push("Peso inválido");
	}

	if ( !validaAltura(paciente.altura) ) {
		erros.push("Altura inválida");
	}

	if ( !validaGordura(paciente.gordura) ) {
		erros.push("% de gordura inválida");
	}
		
	//console.log(erros);

	return erros;
}