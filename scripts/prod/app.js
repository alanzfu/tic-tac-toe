$(document).ready(function () {
  initializeGame();
});


function initializeGame () {
  var gridSize = prompt("How large of a tic tac toe game? Max 20", "3,4,5, etc...");
  gridSize = sanitize(gridSize);
  if (gridSize === NaN) {
    gridSize = prompt("Sorry that's an invalid input, please input a single number (e.g. 3, 4, 5, etc...)");
  }

  //Initialize Data
  window.xTurn = true;
  window.turnCount = 0;
  window.grid = [];
  window.gameFinished = false;
  console.log(window.xTurn);


  //Initialize DOM
  var domGrid = $('.tic-grid');
  domGrid.html('');
  $('.winner-title').remove();


  //Creates Source of Truth and DOM rendered version of Truth
  for (var i = 0; i < gridSize; i++) {
    domGrid.append('<div class="row" id="'+i+'"></div>')
    window.grid.push([]);
    for (var j = 0; j < gridSize; j++) {
      var idString = i + "-" + j;
      $('#'+i).append('<div class="tile" id="'+idString+'"><div class="label"></div></div>');
      window.grid[i].push(0);
    }
  }

  var width = $('.container').width()/gridSize-10;
  $('.tile').css({
    'width': width+'px',
    'height': width+'px',
    'font-size': width/2+'px',
    'border-radius': width/10+'px'
  });


}

//Game Logic
$(document).on('click', '.tile', function () {
  //Only go through game logic if tile has never been clicked before
  if (!$(this).hasClass('marked')) {
    $(this).addClass('marked');
    //Place X or O in DOM
    if (window.xTurn) {
      $(this).html();
      $(this).html('<div class="label">X</div>');
      $(this).removeClass('hover');
      $(this).addClass('x');
    } else {
      $(this).html('<div class="label">O</div>');
      $(this).removeClass('hover');
      $(this).addClass('o');
    }

    //alter source of truth in data
    var id = $(this).attr('id');
    id = id.split("-");
    var row = parseInt(id[0]);
    var col = parseInt(id[1]);
    window.grid[row][col] = window.xTurn;
    window.turnCount++;

    //Check if there was a win
    if(checkWin(window.grid, row, col) && !gameFinished){
      gameFinished = !gameFinished;
      $('.overlay').show();
      if (window.xTurn) {
        $('.modal').prepend('<h1 class="winner-title">X Won!</h1>');
      } else {
        $('.modal').prepend('<h1 class="winner-title">O Won!</h1>');
      }
    }

    if (window.turnCount === window.grid.length*window.grid.length && !gameFinished) {
      $('.winner-title').remove();
      $('.overlay').show();
      $('.modal').prepend('<h1 class="winner-title">Tie Game!</h1>');
    }

    //Change Who's turn it is
    window.xTurn = !window.xTurn;
  }
});

//Hover Behavior
$(document).on('mouseenter', '.tile', function () {
  if(!$(this).hasClass('marked')) {
    $(this).addClass('hover');
    if (window.xTurn) {
      $(this).html('<div class="label">X</div>');
    } else {
      $(this).html('<div class="label">O</div>');
    }
  }
});

$(document).on('mouseleave', '.tile', function () {
  if(!$(this).hasClass('marked')) {
    $(this).html('');
  }
  $(this).removeClass('hover');
    //removeClass
})

$(document).on('click', '.restart', function () {
  //reinitialize the grid, reinitialie the dom, etc.
  initializeGame();
})

$(document).on('click', '.close', function () {
  $('.overlay').hide();
})
$(document).on('click', '.overlay', function () {
  $('.overlay').hide();
})

var modalString = [
  '<div class="overlay">',
    '<div class="modal">',
      '<button class="close">X</button>',
      '<button class="restart">Restart?</button>',
    '</div>',
  '</div>'
].join('');

function sanitize(string) {
  var sanitizedInt = parseInt(string);
  if (sanitizedInt > 30) {
    sanitizedInt = 30;
  } else if (sanitizedInt === NaN) {
    sanitizedInt = 3;
  };
  return sanitizedInt;
}

//Checks for Win with a given grid, and row and column index (does not check entire grid, only most recently inputed);
function checkWin(grid, row, col) {
  if (checkRow(grid, row) || checkColumn(grid, col) || checkDiagonal(grid)) {
    return true;
  } else {
    return false;
  }
}

//Checks single row of most recent input
function checkRow(grid, index) {
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
function checkColumn (grid, index) {
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
function checkDiagonal(grid) {
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

module.exports = {
  checkWin: checkWin,
  checkRow: checkRow,
  checkColumn: checkColumn,
  checkDiagonal: checkDiagonal
}
