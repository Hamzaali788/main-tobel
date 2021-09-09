let one = document.getElementById('image1');

window.addEventListener('scroll', function () {

    var value = window.scrollY;
    one.style.top = value * -0.1 + 'px';
})

// let nav = document.getElementById('nav');
let rightbox = document.getElementById('rightbox');

function nav() {
    rightbox.style.right = "0px"
}


function cross() {
    rightbox.style.right = "-450px"
}

$(document).ready(function(){
    $("#menu").click(function(){
      $("#navbar").slideToggle();
    });
  });