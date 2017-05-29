
/** Buscando informações da tabela em HTML através do JS **/

var pacientes = document.querySelectorAll(".paciente"); //querySelectorAll retorna um array com todas as informações dos pacientes cadastrados no HTML
//console.log(pacientes); // mostra o vetor pacientes com todas as informações

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

	var nome = pacientes[i].querySelector(".info-nome").textContent;
	var peso = pacientes[i].querySelector(".info-peso").textContent;
	var altura = pacientes[i].querySelector(".info-altura").textContent;
	var gordura = pacientes[i].querySelector(".info-gordura").textContent;


// Validação do peso e altura
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

if (!pesoValido) {
	console.log("Peso inválido!");
	pacientes[i].querySelector(".info-peso").textContent = "Peso inválido!";
	paciente.classList.add("dados-invalidos");
}

if (!alturaValida) {
	console.log("Altura inválida!");
	pacientes[i].querySelector(".info-altura").textContent = "Altura inválida!";
	paciente.classList.add("dados-invalidos");
}

if (pesoValido && alturaValida) {

		//var imc = peso / (altura * altura);
		var imc = calculaImc(peso, altura);
		pacientes[i].querySelector(".info-imc").textContent = imc; // alterando o valor do IMC na tabela; toFixed(2) utilizado para 2 casas decimais
} 	else {
		pacientes[i].querySelector(".info-imc").textContent = "IMC não calculado!";
		console.log("Erro no calculo do IMC, verifique se o peso e a altura não são inválidos...");
	}

}



function calculaImc(peso, altura) {

	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);

}

function validaPeso(peso) {
	if (peso > 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura > 0 && altura < 3.00) {
		return true;
	} else {
		return false;
	}
}

function validaGordura(gordura) {
	if (gordura > 0 && gordura < 100) {
		return true;
	} else {
		return false;
	}
}




