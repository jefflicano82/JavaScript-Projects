function addition_Function() {
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+addition;
}
function subtraction_Function() {
    var Subtraction=5-2;
    document.getElementById("Sub").innerHTML="5-2="+Subtraction;
}
function mult_Function() {
    var simple_Math=6*8;
    document.getElementById("Mult").innerHTML="6X8="+simple_Math;
}
function more_Math() {
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("Math1").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals"+ simple_Math;
}
function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById("Math3").innerHTML="When you divide 25 by 6 you have a remainder of:"+simple_Math;
}
var X=5;
X++;
document.write(X);
var Y=5;
Y--;
document.write(Y);
window.alert(Math.random()*100);
window.alert (Math.SQRT1_2)