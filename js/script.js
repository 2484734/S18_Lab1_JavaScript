function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  let qty = document.getElementById("qty");
  let titre = document.getElementById("titre");
  let texte = document.getElementById("contenu");
  demo.innerHTML = "";

  for(let i = 0; i < qty.value; i++){
    let h = document.createElement("h2");
    h.textContent = titre.value + " " + i;
    demo.appendChild(h);

    let p = document.createElement("p");
    p.textContent = texte.value + " " + i;
    demo.appendChild(p);

  }
  
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let demo = document.getElementById("demo");
  let couleur = document.getElementById("couleur");
  let demoP = demo.getElementsByTagName("p");

  for(let p of demoP) {
    p.style.color = couleur.value
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}