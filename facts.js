


var index;

var factText = document.getElementById('fact-text');
var factImage = document.getElementById('fact-img');
var nextButton = document.getElementById('next-button');
var previousButton = document.getElementById('previous-button');

function updateFact() {
    factText.firstChild.innerHTML = facts[index].fact;
    factImage.style.backgroundImage = `url(${facts[index].image})`;
}

document.addEventListener('DOMContentLoaded', function() {
    index = 0;
    updateFact();
  });

nextButton.addEventListener('click', function() {
    index = (index+1)%20;
    updateFact();
});

previousButton.addEventListener('click', function() {
    index = (index - 1 + 20) % 20;
    updateFact();
});
