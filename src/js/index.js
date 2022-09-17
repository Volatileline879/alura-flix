//FAke data base
var listaFilmes = [
	"Yesterday",
	"A Chegada",
	"Escola de Rock",
	"Interestelar",
	"Star Wars",
	"Herry Potter",
	"Senhor dos Aneis"
];

var listaImagensFilmes = [
	//Yesterday
	"https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
	//A Chegada
	"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
	//Escola de Rock
	"https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
	//Interestelar
	"https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
	//Star Wars 1
	"https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",
	//Harry Potter 1
	"http://pm1.narvii.com/6839/dac9423e866d38de21b34a0063ada7a7ea5efa38v2_00.jpg",
	//Senhor dos Aneis
	"https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
];

var listaLinksFilmes = [
	//Yesterday
	"https://google.com",
	//A Chegada
	"https://google.com",
	//Escola de Rock
	"https://google.com",
	//Interestelar
	"https://google.com",
	//Star Wars 1
	"https://google.com",
	//Harry Potter 1
	"https://google.com",
	//Senhor dos Aneis
	"https://google.com"
];
//End of fake data base

liElemento();

function liElemento() {
	var elementoLista = document.getElementById("lista-1");
	for (var i = 0; i < listaFilmes.length; i++) {
		verifyFilmes(i);
		var elementoFilmes =
			"<li class=filmes>" + 
				"<a  href=" + listaLinksFilmes[i] + " target=_blank><img src=" + listaImagensFilmes[i] + "></a>" + 
			"</li>";

		elementoLista.innerHTML = elementoLista.innerHTML + elementoFilmes;
	}
}

function verifyFilmes(i) {
	for (var l = 0; l < listaFilmes.length; l++) {
		if (listaFilmes[l] == listaFilmes[i] && l != i) {
      //fazer auto delet com menssagem de error!
			console.log("need delete");
		}
	}
}
