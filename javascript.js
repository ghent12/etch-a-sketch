let gridUnitsWide = 16
  , gridUnitsHigh = gridUnitsWide
  , padding = 2
  , totalWidth = 960
  , squareWidth = 0
  , squareHeight = squareWidth
  , startingColor = "#ffffff"
  , colorRedValue = Math.round(Math.random() * 255)
  , colorGreenValue = Math.round(Math.random() * 255)
  , colorBlueValue = Math.round(Math.random() * 255);

  console.group('color-values');
    console.log('R: ' + colorRedValue);
    console.log('G: ' + colorGreenValue);
    console.log('B: ' + colorBlueValue);
  console.groupEnd('color-values');

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
  //let allSquares = Array.from(document.querySelectorAll('play-square'));
  //allSquares.forEach(div => div.remove());
  let allSquares = document.getElementById('container').childNodes;
  console.log(allSquares.length);
  allSquares = document.getElementById('container').childNodes;
  for (k = allSquares.length - 1; k >= 0 ; k--) {
    allSquares[k].remove();
  }
  console.log(allSquares.length);
}

function makeGrid(gridUnitCount) {
  squareWidth = (totalWidth - (padding * 2)) / gridUnitCount;
  squareHeight = squareWidth;
  for (i = 0; i < gridUnitCount; i++) {
    for (j = 0; j < gridUnitCount; j++) {
      let playSquare = playArea.appendChild(document.createElement('div'))
      playSquare.classList.add("play-square", ("row-" + (j + 1)), ("column-" + (i + 1)));
      playSquare.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px; flex-shrink: 1;";
      playSquare.addEventListener('mouseover', addHoveredClass);
    }
  }
  document.querySelectorAll("play-square").forEach((square) => {
    square.style.width = squareWidth;
    square.style.height = squareHeight;
  })
}

document.addEventListener('load', makeGrid(gridUnitsWide));

//makeGrid(gridUnitsWide);

function addHoveredClass(e) {
  this.classList.add('hovered-square');
}
