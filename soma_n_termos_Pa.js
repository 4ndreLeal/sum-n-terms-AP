function pularLinha(){
	document.write("<br>");
}

function imprimirNaTela(conteúdoDaMensagem){
	document.write(conteúdoDaMensagem);
	pularLinha();
}

function somaPa(a1, razão, n){
	var soma = 0; 					// Sn = ((a1 + an)*n)/2
	imprimirNaTela("Calculando..."); 	// an = a(n-1) + r 
	soma = (a1 + (a1 + (n-1)*razão))*n/2;	// an = a1 + (n-1)*r
	var resultadoFinal = soma;
	return resultadoFinal;
}

var termoInicialDaSequência = parseInt(prompt("Informe a1, sendo a1 o termo inicial da sequência:"));
var razãoDaSequência = parseInt(prompt("Informe r, sendo r a razão da sequência:"));
var numeroDeTermosDaSequência = parseInt(prompt("Informe n, sendo n o número de termos da sequência:"));
var chamarFunção = somaPa(termoInicialDaSequência, razãoDaSequência, numeroDeTermosDaSequência);
imprimirNaTela("A soma dos " + numeroDeTermosDaSequência + " termos da PA de razão " + razãoDaSequência + " e iniciada em " + termoInicialDaSequência + " é igual a " + chamarFunção);
