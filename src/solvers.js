/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, startingCol, startingRooks) {

    var rooksBoard = new Board({'n': n});
    var currentColumn = startingCol || 0;
    startingRooks = startingRooks || [];
    var currentRow = startingRooks.length || 0;
    var numRooks = 0;

    for(var i = 0; i < startingRooks.length; i++){
      rooksBoard.togglePiece(i, startingRooks[i]);
    console.log(startingRooks[i]+", " + i + ", "+ rooksBoard.rows()[i]);
    };

    for(currentRow; currentRow < n; currentRow++){

        for(currentColumn; currentColumn < n; currentColumn++){

            rooksBoard.togglePiece(currentRow, currentColumn);

            if(rooksBoard.hasAnyRowConflicts() || rooksBoard.hasAnyColConflicts()){
                rooksBoard.togglePiece(currentRow, currentColumn);
            }
        }
      currentColumn = 0;
    }

    var numRooks = this.countPieces(rooksBoard)

    if(numRooks < n)
      this.findNRooksSolution(n, startingCol + 1);

    return (rooksBoard.rows());
};

window.countPieces = function (board) {
  var reduceCallback = function (accumulator, val) {
      return accumulator  + val;
    };
  var numRooks = _.reduce(board.rows(), function (acc, val){
          return acc + _.reduce(val, reduceCallback);
        },0);

  return numRooks;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, startingRow) {
  //return 2*n;
  var solutionCount = 0; //fixme
  var solutionIndexs = [];
  var solutionIndex;

  for(var i = 0; i < n; i++){
    solutionIndex = this.findNRooksSolution(n, i)[0].indexOf(1);
    if(solutionIndexs.indexOf(solutionIndex) === -1) {
      solutionCount++;
      solutionIndexs.push(solutionIndex);
    }

  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
