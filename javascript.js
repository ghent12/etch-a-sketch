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
  console.groupCollapsed('Grid Square Classes');
  for (i = 0; i < gridUnitCount; i++) {
    for (j = 0; j < gridUnitCount; j++) {
      let playSquare = playArea.appendChild(document.createElement('div'))
      playSquare.classList.add("play-square", ("row-" + (j + 1)), ("column-" + (i + 1)), "hovered-square0");
      playSquare.style.cssText = "width: " + squareWidth + "px; height: " + squareHeight + "px; flex-shrink: 1; background-color: " + startingColor + ";";
      playSquare.addEventListener('mouseover', addHoveredClass);
      console.log(playSquare.classList);
    }
  }
  console.groupEnd('Grid Square Classes');
  document.querySelectorAll("play-square").forEach((square) => {
    square.style.width = squareWidth;
    square.style.height = squareHeight;
  })
}

document.addEventListener('load', makeGrid(gridUnitsWide));

//makeGrid(gridUnitsWide);

function addHoveredClass(e) {
  let colorScalar = 100;
  if (this.classList.contains('hovered-square0')) {
    this.classList.add('hovered-square1');
    this.classList.remove('hovered-square0');
  } else if (this.classList.contains('hovered-square1')) {
    this.classList.add('hovered-square2');
    this.classList.remove('hovered-square1');
    colorScalar = 90;
  } else if (this.classList.contains('hovered-square2')) {
    this.classList.add('hovered-square3');
    this.classList.remove('hovered-square2');
    colorScalar = 80;
  } else if (this.classList.contains('hovered-square3')) {
    this.classList.add('hovered-square4');
    this.classList.remove('hovered-square3');
    colorScalar = 70;
  } else if (this.classList.contains('hovered-square4')) {
    this.classList.add('hovered-square5');
    this.classList.remove('hovered-square4');
    colorScalar = 60;
  } else if (this.classList.contains('hovered-square5')) {
    this.classList.add('hovered-square6');
    this.classList.remove('hovered-square5');
    colorScalar = 50;
  } else if (this.classList.contains('hovered-square6')) {
    this.classList.add('hovered-square7');
    this.classList.remove('hovered-square6');
    colorScalar = 40;
  } else if (this.classList.contains('hovered-square7')) {
    this.classList.add('hovered-square8');
    this.classList.remove('hovered-square7');
    colorScalar = 30;
  } else if (this.classList.contains('hovered-square8')) {
    this.classList.add('hovered-square9');
    this.classList.remove('hovered-square8');
    colorScalar = 20;
  } else if (this.classList.contains('hovered-square9')) {
    this.classList.add('hovered-square10');
    this.classList.remove('hovered-square9');
    colorScalar = 10;
  } else {
    colorScalar = 0;
  }

  this.style.backgroundColor = 'rgb(' + Math.round(colorRedValue * colorScalar/100) + ',' 
                                      + Math.round(colorGreenValue * colorScalar/100) + ',' 
                                      + colorBlueValue + 
                                      ')';
}
