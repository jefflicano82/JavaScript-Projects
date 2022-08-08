function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?"
    }
}
function argue_politics() {
    if (10>4)
    document.getElementById("Politics").innerHTML="Everything you think is wrong!"
}