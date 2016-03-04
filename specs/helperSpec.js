var expect = require('chai').expect;
var helpers = require('../scripts/helpers.js');

describe('Checking Win Functions', function() {
  var grid;
  beforeEach(function() {
    grid = [];
  });

  it('should have methods named "checkRow", "checkColumn", and "checkRow', function () {
    expect(helpers.checkRow).to.be.a("function");
    expect(helpers.checkColumn).to.be.a("function");
    expect(helpers.checkRow).to.be.a("function");
    expect(helpers.checkDiagonal).to.be.a("function");
  });

  it('should detect win on a row', function () {
    grid = [[true, true, true],[],[]]
    expect(helpers.checkRow(grid,0,0)).to.equal(true);
  });

  it('should not detect win on a row if not all the same', function () {
    grid = [[true, false, true],[],[]]
    expect(helpers.checkRow(grid,0,0)).to.equal(false);
  });

  it('should detect win on a column', function () {
    grid = [[true, false, false],[true, false],[true]];
    expect(helpers.checkColumn(grid,0,0)).to.equal(true);
  });

  it('should not detect win on a column if not exist', function () {
    grid = [[false, false, false],[true, false],[true]];
    expect(helpers.checkColumn(grid,0,0)).to.equal(false);
  });

  it('should detect win on a diagonal', function () {
    grid = [[true, false, false],[true, true],[false, false, true]];
    expect(helpers.checkDiagonal(grid)).to.equal(true);
  });

  it('should not detect win on a diagonal if not exists', function () {
    grid = [[true, false, true],[true, false],[false, false, true]];
    expect(helpers.checkDiagonal(grid)).to.equal(false);
  });

  it('should detect wins on grids of multiple sizes', function () {
    grid = [[true, false, true],[true, false],[false, false, true]];
    expect(helpers.checkWin(grid,0,1)).to.equal(true);
    grid = [[true, true, true, true],[true, false],[false, false, true],[]];
    expect(helpers.checkWin(grid,0,0)).to.equal(true);
  });
});
