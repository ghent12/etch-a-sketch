let gridUnitsWide = 16
  , gridUnitsHigh = 16
  , squareWidth = 20
  , squareHeight = squareWidth;

const playArea = document.getElementById('container');

playArea.style.cssText = "border-style: solid; border-color: black; border-width: 2px; padding: 2px; display: flex; flex-wrap: wrap; width: " + (squareWidth * (gridUnitsWide)) + "px; height: auto; align-items: center; justify-items: space-between;"

function makeGrid() {
  for (i = 0; i < gridUnitsHigh; i++) {
    for (j = 0; j < gridUnitsWide; j++) {
      let playSquare = playArea.appendChild(document.createElement('div'))
      playSquare.classList.add("play-square", ("row-" + (j + 1)), ("column-" + (i + 1)));
      playSquare.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px; flex-shrink: 1";
    }
  }
}

makeGrid();

/*
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it
    
    console.log(e.propertyName);
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
*/


const playSquareSelect = Array.from(document.getElementsByClassName('.play-square'));

//[].forEach.call()

//const testSquares = Array.prototype.filter.call(playSquareSelect, (playSquareObj) => playSquareObj.nodeName === "DIV")
playSquareSelect.forEach(square => square.addEventListener('mouseover', addHoveredClass))

console.log(playSquareSelect)

function addHoveredClass(e) {
  console.log(e);
  this.classList.add('hovered-square');
}
