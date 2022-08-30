let gridUnitsWide = 16
  , gridUnitsHigh = gridUnitsWide
  , padding = 2
  , totalWidth = 960
  , squareWidth = (totalWidth - (padding * 2)) / gridUnitsWide
  , squareHeight = squareWidth;

const playArea = document.getElementById('container');
playArea.style.cssText = "border-style: solid; border-color: black; border-width: 2px; padding: 2px; display: flex; flex-wrap: wrap; width: " + totalWidth + "px; height: auto; align-items: center; justify-items: space-between;"

const sizeButton = document.getElementById('square-count-btn');
sizeButton.addEventListener('click', askGridSize)

function askGridSize() {
  gridUnitsWide = prompt("How many squares in each width/height? (Max 100)");
  gridUnitsHigh = gridUnitsWide;
  clearGrid();
  makeGrid(gridUnitsWide);
}

function clearGrid() {
  let allSquares = Array.from(document.getElementsByClassName('.play-square'));
  allSquares.forEach(div => div.remove());
}

function makeGrid(gridUnitCount) {
  for (i = 0; i < gridUnitCount; i++) {
    for (j = 0; j < gridUnitCount; j++) {
      let playSquare = playArea.appendChild(document.createElement('div'))
      playSquare.classList.add("play-square", ("row-" + (j + 1)), ("column-" + (i + 1)));
      playSquare.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px; flex-shrink: 1";
      playSquare.addEventListener('mouseover', addHoveredClass);
    }
  }
}

makeGrid(gridUnitsWide);

function addHoveredClass(e) {
  this.classList.add('hovered-square');
}
