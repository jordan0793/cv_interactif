document.addEventListener("DOMContentLoaded", function () {
  let blocExperience = document.querySelector(".experience");
  console.log(blocExperience);

  let fermerExperience = document.querySelector(".fermerExperience");
  console.log(fermerExperience);

  let blocPage = document.querySelector(".bloc_page");
  console.log(blocPage);

  blocExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenExperience");
  });

  fermerExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenExperience");
  });
});
