// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
var typed = new Typed('#text', {
    strings: ['Web Developer','UX Designer','programmer'],
    typeSpeed: 50,
    backspeed:50,
    loop:true
  });
  

  function insta(){
    open("https://www.instagram.com/official_dkjatav01/")
  }

  function youtube(){
    open("https://www.youtube.com/@itsdeepakjatav7830")
  }

  function face(){
    open("https://www.facebook.com/profile.php?id=100091308249239&mibextid=ZbWKwL")
  }

  function mail(){
    open("https://mail.google.com/mail/u/1/#inbox")
  }

  function more(){
    open("https://youtu.be/BQ50eUdxjtk")
  }


  function abc (){
    open("https://themewagon.com/")
  }


  window.onscroll = function() {scrollFunction()};

