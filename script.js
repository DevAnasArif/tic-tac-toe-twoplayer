var box1 = document.getElementById("0");
var box2 = document.getElementById("1");
var box3 = document.getElementById("2");
var box4 = document.getElementById("3");
var box5 = document.getElementById("4");
var box6 = document.getElementById("5");
var box7 = document.getElementById("6");
var box8 = document.getElementById("7");
var box9 = document.getElementById("8");

var count = 0;

var stauts=document.getElementById("status")
function textShow() {
  if (count % 2 === 0) {
    stauts.innerHTML = "Player X's Turn";
    return "O";
  } else {
    stauts.innerHTML = "Player O's Turn";
    return "X";
  }
}

function Tournamentreset() {
  reset();
  numbero=0
  numberx=0
  load()
}
function reset() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  count = 0;
  stauts.innerHTML = "Player O's Turn";
}

function game(number) {
  var text = textShow();

  if (number === 0 && box1.innerHTML === "") {
    box1.innerHTML = text;
    count++;
  } else if (number === 1 && box2.innerHTML === "") {
    box2.innerHTML = text;
    count++;
  } else if (number === 2 && box3.innerHTML === "") {
    box3.innerHTML = text;
    count++;
  } else if (number === 3 && box4.innerHTML === "") {
    box4.innerHTML = text;
    count++;
  } else if (number === 4 && box5.innerHTML === "") {
    box5.innerHTML = text;
    count++;
  } else if (number === 5 && box6.innerHTML === "") {
    box6.innerHTML = text;
    count++;
  } else if (number === 6 && box7.innerHTML === "") {
    box7.innerHTML = text;
    count++;
  } else if (number === 7 && box8.innerHTML === "") {
    box8.innerHTML = text;
    count++;
  } else if (number === 8 && box9.innerHTML === "") {
    box9.innerHTML = text;
    count++;
  }

  // Winning Check
  win();

  // Reset
  if (count === 9) {
    alert("Draw")
    stauts.innerHTML = "Player O's Turn";
    reset();
  }
}

var numberx=0
var numbero=0


function win() {
  var container1 = box1.innerHTML;
  var container2 = box2.innerHTML;
  var container3 = box3.innerHTML;
  var container4 = box4.innerHTML;
  var container5 = box5.innerHTML;
  var container6 = box6.innerHTML;
  var container7 = box7.innerHTML;
  var container8 = box8.innerHTML;
  var container9 = box9.innerHTML;

  if (container1 === "O" && container2 === "O" && container3 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container4 === "O" && container5 === "O" && container6 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container7 === "O" && container8 === "O" && container9 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container1 === "O" && container4 === "O" && container7 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container2 === "O" && container5 === "O" && container8 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container3 === "O" && container6 === "O" && container9 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container3 === "O" && container5 === "O" && container7 === "O") {
    alert("O Win");
    numbero++;
    reset();
  } else if (container1 === "O" && container5 === "O" && container9 === "O") {
    alert("O Win");
    numbero++;
    reset();
  }
  else if (container1 === "X" && container2 === "X" && container3 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container4 === "X" && container5 === "X" && container6 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container7 === "X" && container8 === "X" && container9 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container1 === "X" && container4 === "X" && container7 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container2 === "X" && container5 === "X" && container8 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container3 === "X" && container6 === "X" && container9 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container3 === "X" && container5 === "X" && container7 === "X") {
    alert("X Win");
    numberx++;
    reset();
  } else if (container1 === "X" && container5 === "X" && container9 === "X") {
    alert("XWin");
    numberx++;
    reset();
  }
  // else{
  //   alert("Draw");
  //   reset();
  // }

  load();

  if(numberx==3){
    alert("X Won The Tournament")
    Tournamentreset()
  }
  else if(numbero==3){
    alert("O Won The Tournament")
    Tournamentreset()
  }
}
function load(){
  var xwin = document.getElementById("Xwins");
  xwin.innerHTML="X wins = "+numberx+"/3"
  var Owin = document.getElementById("Owins");
  Owin.innerHTML="O wins = "+numbero+"/3"
}