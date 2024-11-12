//Slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex >= x.length) {myIndex = 0}    
  x[myIndex].style.display = "block";  
  setTimeout(carousel, 4000);    
}

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /*Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    //Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight === "0px" || panel.style.maxHeight === null) {  
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
        panel.style.maxHeight = "0px";
    }
  });
} 