
function initial(){
  document.turn = "x";
  if(Math.random() < 0.5){
    document.turn="o"
  }
  document.winner = null;
  setMessage(document.turn + ' go first')
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

function nextMove(square){
  if(document.winner != null){
    setMessage("Game Over!")
  } else if(square.innerText ===""){
    square.innerText = document.turn;
    switchTurn()
  } else {
    setMessage("this sqaure is occupied! Try another!")
  }
}

function switchTurn(){
  if (checkForWinner(document.turn)){
    setMessage(document.turn + " win!");
    document.winner = document.turn
  } else if(document.turn === 'x'){
    document.turn = 'o'
    setMessage( "o's turn!")
  }
  else{
    document.turn ='x'
    setMessage( "x's turn!")
  }
}
function checkForWinner(move){
  var result =false;
  if (checkRow(1, 2, 3, move)||
      checkRow(4, 5, 6, move)||
      checkRow(7, 8, 9, move)||
      checkRow(1, 4, 7, move)||
      checkRow(2, 5, 8, move)||
      checkRow(3, 6, 9, move)||
      checkRow(1, 5, 9, move)||
      checkRow(3, 5, 7, move)){
        result = true;
      }
      return result
}

function checkRow(a, b, c, move){
  var result = false;
  if(getBox(a)=== move && getBox(b)=== move && getBox(c)=== move){
    result = true;
  }
  return result
}
function getBox(num){
  return document.getElementById(num).innerText;
}

function reset(){
  for(var i=1; i<=9; i++){
    document.getElementById(i).innerHTML=""
    initial()
  }
}
