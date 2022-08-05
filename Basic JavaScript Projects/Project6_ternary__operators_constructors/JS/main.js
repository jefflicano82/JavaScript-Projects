function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short ":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+"to ride.";
}
function vote_Function() {
    var Age, can_vote;
    Age=document.getElementById("Age").value;
    can_vote=(Age<18) ? "You are not old enough ":" You are old enough";
    document.getElementById("vote").innerHTML=can_vote+"to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle ("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle ("Ford","Pinto",1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a"+Erik.Vehicle_Color+"-colored"+Erik.Vehicle_Model+
    "manufactured in"+Erik.Vehicle_Year;
}

function Outfit(Pants, Shoes, Shirt) {
    this.Outfit_Pants=Pants;
    this.Outfit_Shoes=Shoes;
    this.Outfit_Shirt=Shirt;
}
var Jeff=new Outfit("Jeans","Nike","Red");

function New_Function() {
    document.getElementById("New_and_This").innerHTML=
    "Jeff wears"+Jeff.Outfit_Pants+Jeff.Outfit_Shoes+"branded shoes"+
    "a"+Jeff.Outfit_Shirt+"shirt";
}

function Big_Function() {
    document.getElementById("Nest").innerHTML=Nested();
    function Nested() {
        var Starting_point=9;
        function Plus_one() {Starting_point+=1;}
        Plus_one();
        return Starting_point;
    }
}