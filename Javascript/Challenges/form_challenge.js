function validateForm() {
  let x = document.forms["phonenumber"].value;
  if (x == "") {
    alert("number must be entered.");
    return false;
  }
}
