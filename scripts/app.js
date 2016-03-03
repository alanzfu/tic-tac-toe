/*
  1. prompt user for number of grids, if invalid or cancel, just do 3
  2. create grid with unique ids

  on Click:
    - depending on the value
      - change tile to have x instead blank
    - disable clicking again, remove listener
    - alter source of truth
    - see if someone won
    - if win, display
*/
var xTurn = true;

var gridSize = prompt("How large of a tic tac toe game?");
gridSize = parseInt(gridSize);


var grid = [];
var domGrid = $('.tic-grid');

//Creates Source of Truth and DOM rendered version of Truth
for (var i = 0; i < gridSize; i++) {
  domGrid.append('<div class="row" id="'+i+'"></div>')
  grid.push([]);
  for (var j = 0; j < gridSize; j++) {
    var idString = i + "-" + j;
    $('#'+i).append('<div class="tile" id="'+idString+'">-</div>');
    grid[i].push(0);
  }
}

//Game Logic
$(document).on('click', '.tile', function () {
  //Only go through game logic if tile has never been clicked before

  if ($(this).text() === "-") {
    var id = $(this).attr('id');

    //Change to X or O
    if (xTurn) {
      $(this).text("X");
    } else {
      $(this).text("O");
    }



    //alter source of truth
    id = id.split("-");
    var row = parseInt(id[0]);
    var col = parseInt(id[1]);
    grid[row][col] = xTurn;

    if(checkWin(grid, row, col)){
      if (xTurn) {
        //display model with x wins
      } else {
        //display modal with o wins
      }
    }


    //Change Who's turn it is
    xTurn = !xTurn;
    //Change display of Who's turn it is
  }
})
