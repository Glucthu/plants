window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function hilight(element) {
  document.getElementById(element).style.fill = "hsl(150deg 90% 80%)";
}

function unhilight(element) {
  document.getElementById(element).style.fill = "hsl(150deg 90% 50%)";
}

function toggleDisplayBlock(element) {
  if (document.getElementById(element).style.display == "none" || document.getElementById(element).style.display == ""){
    document.getElementById(element).style.display = "block";
    console.log("none")
  } else {
    document.getElementById(element).style.display = "none";
    console.log("block")
  }
}