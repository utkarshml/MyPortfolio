var b = window.matchMedia("(max-width:768px)");
let slider = document.getElementById("slider");
let home = document.getElementById("home");
let Ser = document.getElementById("Ser");
let about = document.getElementById("about");
let contactus = document.getElementById("contactus");
let homeicon = document.getElementById("home-icon");
let Sericon = document.getElementById("Ser-icon");
let abouticon = document.getElementById("about-icon");
let contactusicon = document.getElementById("contactus-icon");
home.style.color = "white";
homeicon.style.color = "white";
window.onload = (query) = () => {
  if (!b.matches) {
    const slideMenu1 = () => {
      home.style.color = "white";
      slider.style.left = "0";
      Ser.style.color = "var(--first-color)";
      about.style.color = "var(--first-color)";
      contactus.style.color = "var(--first-color)";
    };

    const slideMenu2 = () => {
      Ser.style.color = "white";
      slider.style.left = "25%";
      about.style.color = "var(--first-color)";
      contactus.style.color = "var(--first-color)";
      home.style.color = "var(--first-color)";
    };

    const slideMenu3 = () => {
      about.style.color = "white";
      slider.style.left = "50%";
      contactus.style.color = "var(--first-color)";
      Ser.style.color = "var(--first-color)";
      home.style.color = "var(--first-color)";
    };

    const slideMenu4 = () => {
      contactus.style.color = "white";
      slider.style.left = "75%";
      home.style.color = "var(--first-color)";
      about.style.color = "var(--first-color)";
      Ser.style.color = "var(--first-color)";
    };
    home.addEventListener("click", slideMenu1);
    Ser.addEventListener("click", slideMenu2);
    about.addEventListener("click", slideMenu3);
    contactus.addEventListener("click", slideMenu4);
  } else {
    const slideMenu1 = () => {
      slider.style.left = "0%";
      homeicon.style.color = "white";
      Sericon.style.color = "var(--first-color)";
      abouticon.style.color = "var(--first-color)";
      contactusicon.style.color = "var(--first-color)";
    };

    homeicon.addEventListener("click", slideMenu1);
    const slideMenu2 = () => {
      slider.style.left = "25%";
      Sericon.style.color = "white";
      abouticon.style.color = "var(--first-color)";
      contactusicon.style.color = "var(--first-color)";
      homeicon.style.color = "var(--first-color)";
    };
    Sericon.addEventListener("click", slideMenu2);

    const slideMenu3 = () => {
      slider.style.left = "50%";
      abouticon.style.color = "white";
      contactusicon.style.color = "var(--first-color)";
      Sericon.style.color = "var(--first-color)";
      homeicon.style.color = "var(--first-color)";
    };
    abouticon.addEventListener("click", slideMenu3);
    const slideMenu4 = () => {
      slider.style.left = "75%";
      contactusicon.style.color = "white";
      homeicon.style.color = "var(--first-color)";
      abouticon.style.color = "var(--first-color)";
      Sericon.style.color = "var(--first-color)";
    };
    contactusicon.addEventListener("click", slideMenu4);
  }
};
b.addEventListener("change", query)


//  Heading type effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Utkarsh", "Civil Engineer", "Student", "Coder"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
