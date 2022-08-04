function My_First_Function () {
    var A= "This is the first line";
    var B="This is the second line";
document.getElementById("Main_Text").innerHTML=A,B;
}

function Func2(p1, p2) {
   var result= (p1*p2);
    document.getElementById("Func2").innerHTML=result;   // The function returns the product of p1 and p2
  }

function myFunction () {
    var sentence="I am learning";
    sentence+="A lot from this course!";
    document.getElementById("Concatenate").innerHTML=sentence;
}
