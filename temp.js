let foodtrucks = [
	{ img: 'https://wayowayo.fr/wp-content/uploads/revslider/finedining/atable.jpg',name: 'Wayo Wayo', genre : "Spécialités réunionnaises", description : "Mini food truck de l’océan Indien sur Bordeaux et sa région, il propose bouchons et barquettes de caris cuits au feu de bois..." },
	{ img: 'https://www.bordeauxtendances.fr/wp-content/uploads/2018/09/mamiwata-1300x518.jpg', name: 'Mami Wata', genre : "Spécialités africaines", description : "Du Sénégal à l’Europe en passant par le Cameroun et l’Alsace, Mami Wata propose une cuisine franco-africaine à base de produits frais et locaux." },
	{ img: 'http://www.eltacodeldiablo.fr/wp-content/uploads/2014/12/traiteur-bordeaux.jpg',name: 'El taco del diablo', genre : "Spécialités mexicaines", description : "Retrouvez tortillas de maïs, tacos, burritos, quesadillas, soupes et ceviche, sans oublier les desserts!" },
];

let template = document.querySelector('#foodtrucks');
for (let i = 0; i < foodtrucks.length; i++) {
	let foodtruck = foodtrucks[i];
	let clone = template.content.cloneNode(true);
	let img = clone.querySelectorAll('img');
	img[0].src = foodtruck.img;
	let h3 = clone.querySelectorAll('h3');
	h3[0].innerHTML = foodtruck.name;
	let h4 = clone.querySelectorAll('h4');
	h4[0].innerHTML = foodtruck.genre;
	let p = clone.querySelectorAll('p');
	p[0].innerHTML = foodtruck.description;
	template.parentNode.appendChild(clone);
}
