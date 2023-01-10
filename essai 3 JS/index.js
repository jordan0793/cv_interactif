document.addEventListener("DOMContentLoaded", function () {
  // Declarer une variable en allaant chercher un élément dans le css

  let blocExperience = document.querySelector(".ouvrirExperience");
  console.log(blocExperience);
  // qd je clique sur blocExperience , ça m'ouvre le bloc, donc il faut ajouter la classe .invisible à blocExperience.

  let fermerExperience = document.querySelector(".fermerExperience");
  console.log(fermerExperience);

  let blocPage = document.querySelector(".bloc_page");
  console.log(blocPage);

  // Appel de la fonction

  blocExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenExperience");
  });

  fermerExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenExperience");
  });
});
