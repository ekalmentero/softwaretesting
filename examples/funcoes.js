// Função para o número 1 da lista de funções possíveis
function item1(frase, termoBuscado) {
    if (frase.replace(/[0-9]/g, "").replace(/[!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_‘{|}~)]/g, "").replace(/\s/g, "") == "")
        return 'Frase inválida';
    
    let contador = 0;
    frase.split(' ').forEach(palavra => {
        if (palavra == termoBuscado)
            contador++;
    });
    let saida = 'O termo "' + termoBuscado + '" ';
    if (contador == 0)
        return saida + "não foi encontrado";
    else if (contador == 1)
        return saida + 'foi encontrado 1 vez';
    else
        return saida + 'foi encontrado ' + contador + ' vezes';
}

// Função para o número 2 da lista de funções possíveis
function item2(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (re.test(String(email))) {
		let splitmail = email.split("@");
		return splitmail[0].substr(0,3)+"****@"+splitmail[1];
	} else {
		return ("Entrada invalida");
	}
}

// Função para o número 3 da lista de funções possíveis
function item3(frase) {
	if (!isNaN(parseFloat(frase)) && isFinite(frase)){
		return ("Entrada invalida");
	}else{
		return frase.replace(/\s/g, "-");
	}
}

// Função para o número 8 da lista de funções possíveis
function item8(frase) {
    if (frase.replace(/[0-9]/g, "").replace(/[!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_‘{|}~)]/g, "").replace(/\s/g, "") == "")
        return 'Frase inválida';

    let contador = 0;
    let vogais = ['a', 'á', 'â', 'à', 'ã', 'ä', 'e', 'é', 'ê', 'è', 'ë', 'i', 'í', 'î', 'ï', 'ì', 'o', 'ó', 'ô', 'õ', 'ö', 'ò', 'ø', 'œ', 'æ', 'å', 'u', 'ú', 'ù', 'û', 'ü'];
    Array.from(frase).forEach(letra => {
        if (vogais.includes(letra.toLowerCase())) contador++;
    });
    return '' + contador + ' voga' + ((contador <=1) ? ('l') : ('is'));
}

// Função para o número 9 da lista de funções possíveis
function item9(numero) {
    if (isNaN(parseInt(numero)))
        return 'Entrada inválida'

    let resultado = 0;
    Array.from(String(numero), Number).forEach(n => {resultado += n});
    let saida = 'soma ';
    if (resultado % 2 == 0)
        saida += 'par';
    else
        saida += 'ímpar';
    return saida;
}

module.exports = {
    item1,
    item2,
    item3,
    item8,
    item9,
}
