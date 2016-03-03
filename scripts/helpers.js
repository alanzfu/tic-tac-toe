var modalString = '<div class="modal"><button class="close">x</button><button class="restart">Restart?</button></div>'


//Checks for Win with a given grid, and row and column index (does not check entire grid, only most recently inputed);
var checkWin = function (grid, row, col) {
  if (checkRow(grid, row) || checkColumn(grid, col) || checkDiagonal(grid)) {
    return true;
  } else {
    return false;
  }
}

//Checks single row of most recent input
var checkRow = function (grid, index) {
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < grid.length; i++) {
    if (grid[index][i]) {
      xCount++;
    } else if (grid[index][i] === false) {
      oCount++;
    }
  }
  if (oCount === grid.length || xCount === grid.length) {
    return true;
  } else {
    return false;
  }
}

//Checks single column of most recent input
var checkColumn = function (grid, index) {
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < grid.length; i++) {
    if (grid[i][index]) {
      xCount++;
    } else if (grid[i][index] === false) {
      oCount++;
    }
  }
  if (oCount === grid.length || xCount === grid.length) {
    return true;
  } else {
    return false;
  }
}


//Checks y=x diagonal and y=-x diagonal
var checkDiagonal = function (grid) {
  var xCountRight = 0;
  var oCountRight = 0;
  var xCountLeft = 0;
  var oCountLeft = 0;

  for (var i = 0; i < grid.length; i++) {
    if (grid[i][i]) {
      xCountRight++;
    } else if (grid[i][i] === false) {
      oCountRight++;
    }
    if (grid[grid.length-1-i][i]) {
      xCountLeft++;
    } else if (grid[grid.length-1-i][i] === false) {
      oCountLeft++;
    }
  }

  if (oCountRight === grid.length || xCountRight === grid.length || oCountLeft === grid.length || xCountLeft === grid.length) {
    return true;
  } else {
    return false;
  }
}
