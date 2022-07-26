var i = 0;
var txt = 'Hello.  I am KUMUD RANJAN, a web developer. Im 20.yo And I love the web world very much. I am from India City Noida. You can see my portfolio and mastery below :)';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  document.getElementById("html-push").style.width = "90%";
  document.getElementById("html-push").style.transition = "all 1.5s";

  document.getElementById("css-push").style.width = "90%";
  document.getElementById("css-push").style.transition = "all 1.5s";

  document.getElementById("js-push").style.width = "60%";
  document.getElementById("js-push").style.transition = "all 1.5s";

  document.getElementById("node-push").style.width = "30%";
  document.getElementById("node-push").style.transition = "all 1.5s";

  document.getElementById("express-push").style.width = "20%";
  document.getElementById("express-push").style.transition = "all 1.5s";
}