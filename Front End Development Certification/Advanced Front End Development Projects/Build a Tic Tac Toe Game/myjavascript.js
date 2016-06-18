var plyrturn = false;
var cellsUsed = [];
var posWinner = [[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,8,9]]
var x = 'X';
var o = 'O';

$(".cell1").click(function() {
  if (plyrturn) {
    if(playerTurn(1)) return;
    if(machineTurn()) return;
  }
});

$(".cell2").click(function() {
  if (plyrturn) {
    if(playerTurn(2)) return;
    if(machineTurn()) return;
  }
});

$(".cell3").click(function() {
  if (plyrturn) {
    if(playerTurn(3)) return;
    if(machineTurn()) return;
  }
});

$(".cell4").click(function() {
  if (plyrturn) {
    if(playerTurn(4)) return;
    if(machineTurn()) return;
  }
});

$(".cell5").click(function() {
  if (plyrturn) {
    if(playerTurn(5)) return;
    if(machineTurn()) return;
  }
});

$(".cell6").click(function() {
  if (plyrturn) {
    if(playerTurn(6)) return;
    if(machineTurn()) return;
  }
});

$(".cell7").click(function() {
  if (plyrturn) {
    if(playerTurn(7)) return;
    if(machineTurn()) return;
  }
});

$(".cell8").click(function() {
  if (plyrturn) {
    if(playerTurn(8)) return;
    if(machineTurn()) return;
  }
});

$(".cell9").click(function() {
  if (plyrturn) {
    if(playerTurn(9)) return;
    if(machineTurn()) return;
  }
});

function machineTurn(){
  do {
    var value = Math.floor(Math.random()*9)+1;
  } while (contains(value) && cellsUsed.length!=9);

  if (!contains(value) && plyrturn == false) {
    $("#id" + value).text(x);
    cellsUsed.push({'name':x,'value':value});
    plyrturn = true;
  }
  return checkWinner();
}

function playerTurn(value){
  if (!contains(value) && plyrturn == true) {
    $("#id" + value).text(o);
    cellsUsed.push({'name':o,'value':value});
    plyrturn = false;
  }
  return checkWinner();
}

function contains(value){
  var found = false;
  for(var i =0; i< cellsUsed.length;i++){
    if (cellsUsed[i].value == value) {
      found = true;
    }
  }
  return found;
}

function checkWinner(){
  var lsx = [];
  var lso = [];

  var cellsSorted =  cellsUsed.sort(function(a, b){
    return a.value > b.value;
  });

  for (var i = 0; i < cellsSorted.length; i++) {
    if (cellsSorted[i].name == 'X') {
      lsx.push(cellsSorted[i].value);
    }else{
      lso.push(cellsSorted[i].value);
    }
  }

  for (pos of posWinner) {
    if (lsx.includes(pos[0]) && lsx.includes(pos[1]) && lsx.includes(pos[2])) {
      $(".win").text("Machine wins!");
      return true;
    }else if(lso.includes(pos[0]) && lso.includes(pos[1]) && lso.includes(pos[2])){
      $(".win").text("You win!");
      return true;
    }
  }

  if(cellsSorted.length == 9){
    $(".win").text("It's a draw!");
    return;
  }
  return false;
}

$("#play").click(function(){
  machineTurn();
});

$("#reset").click(function(){
  for(var i = 1; i<=9; i++){
    $("#id" + i).text('');
    $(".win").text('');
    plyrturn = false;
    cellsUsed = [];
  }
});
