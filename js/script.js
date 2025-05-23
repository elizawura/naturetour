function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    return true;
  } else {
    x.className = "topnav";
  }
}
