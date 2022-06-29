// Selectors
const frontEndBtn = document.querySelector(".home-btn");

frontEndBtn.addEventListener("click", function (e) {
  party.sparkles(this, {
    count: party.variation.range(40, 40),
  });
});
