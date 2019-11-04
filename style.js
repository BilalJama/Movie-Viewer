function openTab(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();









function openBody(bodyName,elmntbody,bodycolor) {
  var i, bodycontent, bodylinks;
  bodycontent = document.getElementsByClassName("bodycontent");
  for (i = 0; i < bodycontent.length; i++) {
    bodycontent[i].style.display = "none";
  }
  bodylinks = document.getElementsByClassName("bodylink");
  for (i = 0; i < bodylinks.length; i++) {
    bodylinks[i].style.backgroundColor = "";
  }
  document.getElementById(bodyName).style.display = "block";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var myVar;

function castButton() {
  myVar = setTimeout(showCast, 1500);
}

function showCast() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "inline";
  document.getElementById("myDiv2").style.display = "inline";
  document.getElementById("myDiv3").style.display = "inline";
  document.getElementById("myDiv4").style.display = "inline";
  document.getElementById("myDiv5").style.display = "inline";
  document.getElementById("myDiv6").style.display = "inline";
  document.getElementById("myDiv7").style.display = "inline";
  document.getElementById("myDiv8").style.display = "inline";
  
}


var myVar2;
function loadMoreButton() {
  myVar2 = setTimeout(loadMoreDiv, 2000);

}

function loadMoreDiv() {
  document.getElementById("loader2").style.display = "none";
  document.getElementById("loadDiv").style.display = "inline";
  
}






function loadMore() {
  var x = document.getElementById("moreCast");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}

function RemoveItself(elem) {
  elem.parentNode.removeChild(elem);
}





// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";

}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}











function openModal2() {
  document.getElementById("myModal2").style.display = "block";

}
// Close the Modal
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}

// Thumbnail image controls
function currentSlide2(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");
  if (n2 > slides2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}




function openModal3() {
  document.getElementById("myModal3").style.display = "block";

}
// Close the Modal
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n3) {
  showSlides3(slideIndex3 += n3);
}

// Thumbnail image controls
function currentSlide3(n3) {
  showSlides3(slideIndex3 = n3);
}

function showSlides3(n3) {
  var k;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("demo3");
  var captionText3 = document.getElementById("caption3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  for (k = 0; k < dots3.length; k++) {
    dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
  captionText3.innerHTML = dots3[slideIndex3-1].alt;
}










/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
 }




// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var o;
    for (o = 0; o < dropdowns2.length; o++) {
      var openDropdown2 = dropdowns2[o];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}



   