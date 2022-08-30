let gridUnitsWide = 16
  , gridUnitsHigh = 16
  , squareWidth = 20
  , squareHeight = squareWidth;

const playArea = document.getElementById('container');

playArea.style.cssText = "border-style: solid; border-color: black; border-width: 2px; padding: 2px; display: flex; flex-wrap: wrap; width: " + (squareWidth * (gridUnitsWide)) + "px; height: auto; align-items: center; justify-items: space-between;"

for (i = 0; i < gridUnitsHigh; i++) {
  for (j = 0; j < gridUnitsWide; j++) {
    let playSquare = playArea.appendChild(document.createElement('div'))
    playSquare.classList.add("play-square", ("row-" + (j + 1)), ("column-" + (i + 1)));
    playSquare.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px; flex-shrink: 1";
  }
}