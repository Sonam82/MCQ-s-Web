var touch = 0;
function answer1() {
  var ans1 = document.ans.M1.value;
  var a1 = document.getElementById("btn1");
  a1.style.display = "block";
  if (ans1 == "Cascading Style Sheets") {
    a1.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    // a1.style.display.background("red");
    a1.innerHTML = "Wrong Answer😒<br>Right Answer is: Cascading Style Sheets";
    touch += 1;
  }
  if (touch == 2) {
    a1.style.display = "none";
    touch = 0;
  }
}
function answer2() {
  ans2 = document.ans.M2.value;
  var a2 = document.getElementById("btn2");
  a2.style.display = "block";
  if (ans2 == "background-color") {
    a2.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a2.innerHTML = "Wrong Answer😒<br>Right Answer is: background-color";
    touch += 1;
  }
  if (touch == 2) {
    a2.style.display = "none";
    touch = 0;
  }
}
function answer3() {
  ans3 = document.ans.M3.value;
  var a3 = document.getElementById("btn3");
  a3.style.display = "block";
  if (ans3 == "color") {
    a3.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a3.innerHTML = "Wrong Answer😒<br>Right Answer is: color";
    touch += 1;
  }
  if (touch == 2) {
    a3.style.display = "none";
    touch = 0;
  }
}
function answer4() {
  ans4 = document.ans.M4.value;
  var a4 = document.getElementById("btn4");
  a4.style.display = "block";
  if (ans4 == "3") {
    a4.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a4.innerHTML = "Wrong Answer😒<br>Right Answer is: 3";
    touch += 1;
  }
  if (touch == 2) {
    a4.style.display = "none";
    touch = 0;
  }
}
function answer5() {
  ans5 = document.ans.M5.value;
  var a5 = document.getElementById("btn5");
  a5.style.display = "block";
  if (ans5 == "External") {
    a5.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a5.innerHTML = "Wrong Answer😒<br>Right Answer is: External";
    touch += 1;
  }
  if (touch == 2) {
    a5.style.display = "none";
    touch = 0;
  }
}
function answer6() {
  ans6 = document.ans.M6.value;
  var a6 = document.getElementById("btn6");
  a6.style.display = "block";
  if (ans6 == "#") {
    a6.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a6.innerHTML = "Wrong Answer😒<br>Right Answer is: #";
    touch += 1;
  }
  if (touch == 2) {
    a6.style.display = "none";
    touch = 0;
  }
}
function answer7() {
  ans7 = document.ans.M7.value;
  var a7 = document.getElementById("btn7");
  a7.style.display = "block";
  if (ans7 == ".") {
    a7.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a7.innerHTML = "Wrong Answer😒<br>Right Answer is: .(dot)";
    touch += 1;
  }
  if (touch == 2) {
    a7.style.display = "none";
    touch = 0;
  }
}
function answer8() {
  ans8 = document.ans.M8.value;
  var a8 = document.getElementById("btn8");
  a8.style.display = "block";
  if (ans8 == "/* */") {
    a8.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a8.innerHTML = "Wrong Answer😒<br>Right Answer is: /* */";
    touch += 1;
  }
  if (touch == 2) {
    a8.style.display = "none";
    touch = 0;
  }
}
function answer9() {
  ans9 = document.ans.M9.value;
  var a9 = document.getElementById("btn9");
  a9.style.display = "block";
  if (ans9 == "Yes") {
    a9.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a9.innerHTML = "Wrong Answer😒<br>Right Answer is: Yes";
    touch += 1;
  }
  if (touch == 2) {
    a9.style.display = "none";
    touch = 0;
  }
}
function answer10() {
  ans10 = document.ans.M10.value;
  var a10 = document.getElementById("btn10");
  a10.style.display = "block";
  if (ans2 == "border-radius") {
    a10.innerHTML = "Correct Answer👍";
    touch += 1;
  } else {
    a10.innerHTML = "Wrong Answer😒<br>Right Answer is: border-radius";
    touch += 1;
  }
  if (touch == 2) {
    a10.style.display = "none";
    touch = 0;
  }
}
