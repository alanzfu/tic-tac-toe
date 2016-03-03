

var checkWin = function (grid, row, col) {
  if (checkRow(grid, row) || checkColumn(grid, col) || checkDiagonal(grid)) {
    return true;
  } else {
    return false;
  }
}

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


var a = [
  [true, true, true],
  [],
  []
]

checkWin(a, 0,0);
