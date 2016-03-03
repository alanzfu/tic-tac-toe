$(document).ready(function () {
  initializeGame();
});


function initializeGame () {
  var gridSize = prompt("How large of a tic tac toe game?", "3,4,5, etc...");
  gridSize = parseInt(gridSize);
  while (gridSize === NaN) {
    gridSize = prompt("Sorry that's an invalid input, please input a single number (e.g. 3, 4, 5, etc...)");
  }

  //Initialize Data
  window.xTurn = true;
  window.grid = [];


  //Initialize DOM
  var domGrid = $('.tic-grid');
  domGrid.html('');
  $('.turn-title').text("X's turn");


  //Creates Source of Truth and DOM rendered version of Truth
  for (var i = 0; i < gridSize; i++) {
    domGrid.append('<div class="row" id="'+i+'"></div>')
    window.grid.push([]);
    for (var j = 0; j < gridSize; j++) {
      var idString = i + "-" + j;
      $('#'+i).append('<div class="tile" id="'+idString+'">-</div>');
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
  if ($(this).text() === "-") {
    //Place X or O in DOM
    if (window.xTurn) {
      $(this).html('<div class="label">X</div>');
      $('.turn-title').text("O's turn");
    } else {
      $(this).html('<div class="label">O</div>');
      $('.turn-title').text("X's turn");
    }

    //alter source of truth in data
    var id = $(this).attr('id');
    id = id.split("-");
    var row = parseInt(id[0]);
    var col = parseInt(id[1]);
    window.grid[row][col] = window.xTurn;

    //Check if there was a win
    if(checkWin(window.grid, row, col)){
      var playAgain;
      if (window.xTurn) {
        playAgain = confirm('X Won, Play Again?');
      } else {
        playAgain = confirm('O Won, Play Again?');
      }

      if (playAgain) {
        initializeGame();
      }
    }

    //Change Who's turn it is
    window.xTurn = !window.xTurn;
  }
});

$(document).on('click', '.restart', function () {
  //reinitialize the grid, reinitialie the dom, etc.
  initializeGame();
})
