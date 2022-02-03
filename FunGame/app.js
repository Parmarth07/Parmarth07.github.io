const mainBtn = document.getElementById("btn");

mainBtn.addEventListener("click", function () {
  alert("Click ok to proceed!");
  document.querySelector(".hidden-h1").classList.remove("remove");
  document.querySelector(".container").classList.add("remove");
});
