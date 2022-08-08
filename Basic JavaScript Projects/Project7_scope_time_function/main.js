var X = 10;
function Add_numbers_1() {
  console.log("in add_numbers_1 x =" + X);
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
  var Y = 10;
  document.write(20 + Y + "<br>");
}

function Add_numbers_4() {
  document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning Time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
