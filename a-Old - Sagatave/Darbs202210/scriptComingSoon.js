/* ****************************************************************************************************************************** */
/* Kods, kas skaita laiku līdz 2022.gada 31.decembra pusnaktij (jaunajam gadam) */

var countDownDate = new Date("Dec 31, 2022 23:00:01").getTime();  /* Uzstādam beigu laiku, līdz kuram skaitīsim */
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();  /* Dabūjam pašreizējo uzstādīto laiku */

  var distance = countDownDate - now; /* Sarēķinam, cik sekundes ir no pašreizējā laika līdz beigu laikam */

  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); /* Sarēķinam pilnas dienas */
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  /* Sarēķinam pilnas stundas */
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  /* Sarēķinam pilnas minūtes */
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  /* Sarēķinam sekundes */

  document.getElementById("pulkstenis").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s "; /* Dabūtos rezultātus ieliekam attiecīgajā HTML elementā, kur rādās taimeris */


  if (distance < 0) {  /* Pārbaudam, vai gadījumā laiks jau nav iztecējis, un ja ir, parādam paziņojumu */
    clearInterval(countdownfunction);
    document.getElementById("pulkstenis").innerHTML = "Jau pagājis!";
  }
}, 1000);




/* ****************************************************************************************************************************** */
/* Kods, kas lapas apakšējā pusē vienu pēc otra ciklā rāda citātus, un ļauj lietotājam starp tiem pārslēgties turp un */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("citati");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
