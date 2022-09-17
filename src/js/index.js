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
	"https://www.primevideo.com/detail/Yesterday/0U8HSIAZ9JFLSWCRI3JF97P2UT?_encoding=UTF8&language=pt_BR",
	//A Chegada
	"https://globoplay.globo.com/assine/?titleId=JzN9CPpvDN&utm_source=adorocinema&utm_medium=cpc&utm_campaign=1-serie-series&utm_term=assista-agora-cta-&utm_content=botao&dclid=CjgKEAjw4JWZBhCJnu7Rx-OylR8SJADiN0Jyf0bcP7kDKXgBsfwKXsxoft0b9sxBa4CD2ThR56XeJ_D_BwE",
	//Escola de Rock
	"https://play.hbomax.com/page/urn:hbo:page:GXnjwrQ52h4CgwwEAAAd9:type:feature?source=googleHBOMAX&action=open",
	//Interestelar
	"https://play.hbomax.com/page/urn:hbo:page:GYGP7pwQv_ojDXAEAAAFc:type:feature?source=googleHBOMAX&action=open",
	//Star Wars 1
	"https://www.disneyplus.com/pt-br/movies/star-wars-a-ameaca-fantasma-episodio-i/2ezYynkgW1AH",
	//Harry Potter 1
	"https://play.hbomax.com/page/urn:hbo:page:GYjt1ywlfs3jDZAEAAAAM:type:feature?source=googleHBOMAX&action=open",
	//Senhor dos Aneis
	"https://www.primevideo.com/detail/amzn1.dv.gti.f856462e-f3f0-47d6-99a7-8e7900ffb935?ref_=dvm_pds_tit_br_dc_s_g_mkw_sdXAajrGT-dc_pcrid_618796846552&mrntrk=slid__pgrid_139847815197_pgeo_1001733_x__ptid_kwd-300625556060&gclid=CjwKCAjw4JWZBhApEiwAtJUN0Hl5QXTKUDNu_-ZkkImmL28gAdA96ySk1QjMlzMRPtqo_Boe7ORUlhoClZ4QAvD_BwE"
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
