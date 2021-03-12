const selectedElement = document.querySelector(".primary--btn");

selectedElement.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(selectedElement);

  const turnCard = document.querySelector(".card--container--inner");
  turnCard.classList.add("card--container--flip");
  console.log(turnCard);
});
