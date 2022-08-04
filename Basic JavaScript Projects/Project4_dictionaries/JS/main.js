function Dictionary()  {
    var Ocean= {
        Spefic:"Pacific",
        Color:"Blue",
        Depth:"35,797 feet",
        Age:"750 million years",
    }; //Deleting Ocean from the dictionary//
    delete Ocean.Color;
    document.getElementById("Dictionary").innerHTML=Ocean.Depth;
}