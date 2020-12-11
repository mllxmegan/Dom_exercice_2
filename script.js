// Afficher les h1
let titre= document.querySelector('h1').textContent;
console.log('Premier h1 -> Contenu : ' + titre);
// Afficher les li
let liste= document.getElementsByTagName('li');
// Afficher uniquement la 1ere balise li
  // 1ere methode
let firstLI= liste[0].innerHTML;
console.log ('FIRST LI:'+firstLI);
  // 2ème méthode
let firstLI2= document.querySelector("ul li:first-child").innerHTML;
console.log('FIRST LI2:'+firstLI2);
// 3eme methode

// Dernière balise li
let lastLI = liste[3].innerHTML;
console.log('last LI : ' + lastLI);

// 3eme balise li
let thirdLI = liste [2].innerHTML;
console.log('Third LI:' +thirdLI);

// Afficher le contenu des parents de <ul>
let parent= document.querySelector('#menu').innerHTML;
console.log('HTML du parent de <ul> :' + parent);

// Afficher le contenu des parents de la 4eme <li>

let parents = document.querySelector('li:nth-child(4)').parentNode.innerHTML;
console.log('HTML du parent du quatrième <li> :' + parents);

document.querySelector('ul').addEventListener("mouseover", mouseOver);
//Addeventlistener pour le mouseout
document.querySelector('ul').addEventListener("mouseout", mouseOut);

//je colore en rouge pour le mouseover
function mouseOver() {
  document.querySelector('ul').style.color = "red";
}

//je recolore en noir si mouseout
function mouseOut() {
  document.querySelector('ul').style.color = "black";
}
