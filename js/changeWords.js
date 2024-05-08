document.addEventListener("DOMContentLoaded", function () {
  var words = ["Cryptos", "Oils", "Indices", "Metals", "Forex"];
  var word = document.querySelector(".word");
  var index = 0;

  setInterval(function () {
    word.style.opacity = "0";
    setTimeout(function () {
      word.textContent = words[index];
      index = (index + 1) % words.length;
      word.style.opacity = "1";
    }, 500);
  }, 2000);
});
