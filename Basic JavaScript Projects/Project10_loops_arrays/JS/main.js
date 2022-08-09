var Instruments = ["Guitar", "Drums", "Piano", "Saxphone"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}
var functions = ["string1", "string2", "string3", "string4"];
var news = "";
var X;
function array_Function() {
  for (X = 0; X < functions.length; X++) {
    news += functions[X] + "<br>";
  }
  document.getElementById("Array").innerHTML = news;
}

function constant_function() {
  const Korean_Stars = { Type: "singer", Secondary: "Actress", Name: "IU" };
  Korean_Stars.age = "29";
  Korean_Stars.Name = "Lee Ji-eun";
  document.getElementById("Constant").innerHTML =
    "The name of the famous" + Korean_Stars.Type + "is" + Korean_Stars.Name;
}

function my_Function(Jon) {
  return Jon + "Scottsdale";
}
document.getElementById("demo").innerHTML = my_Function("Jon");
let C = 25;
document.write("<br>" + C);

let car = {
  make: "Dodge",
  model: "viper",
  year: "2021",
  color: "red",
  description: function () {
    return "the car is a" + this.year + this.color + this.make + this.model;
  },
};
document.getElementById("Car_Object").innerHTML = car.description();
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
