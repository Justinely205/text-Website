// Run function upon click.
document.onclick = makeDiv;

function makeDiv(elem) {
  
  // Create a new div element.
  let circle = document.createElement("div");

  // Add the .circle class.
  circle.classList.add("circle");
  circle.setAttribute("id", "word")

var words = ["monitor", "program", "helll", "poem", "texting", "gaming", "pls work"];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

  var paragraph = document.getElementsByClassName("circle");
  var text= document.createTextNode(word);

  // Position of Div
  circle.style.top = elem.clientY - 50 + "px";
  circle.style.left = elem.clientX - 50 + "px";

console.log(word);

  // Append the div to the article element.
  document.querySelector("article").appendChild(circle);
  circle.appendChild(text);

 // document.getElementById("word").textContent = word;
}
