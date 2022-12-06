// Js Variables ---------------------
var b = window.matchMedia("(max-width:768px)");
let slider = document.getElementById("slider");
let home = document.getElementById("home");
let about = document.getElementById("about");
let capability = document.getElementById("capability");
let project = document.getElementById("project");
let homeicon = document.getElementById("home-icon");
let capabilityicon = document.getElementById("capability-icon");
let abouticon = document.getElementById("about-icon");
let projecticon = document.getElementById("project-icon");
let navbar =  document.getElementById("navbar");
let menutoggle = document.getElementById('menu-toggle');
// Tab Bar Sliding Js --------------------
home.style.color = "var(--font-color2)";
homeicon.style.color = "var(--font-color2)";
window.onload = (query) = () => {
  if (!b.matches) //  match meadia js
   {
    const slideMenu1 = () => {
      home.style.color = "var(--font-color2)";
      slider.style.left = "0";
      capability.style.color = "var(--first-color)";
      about.style.color = "var(--first-color)";
      project.style.color = "var(--first-color)";
    
    };

    const slideMenu2 = () => {
      about.style.color = "var(--font-color2)";
      slider.style.left = "25%";
      capability.style.color = "var(--first-color)";
      project.style.color = "var(--first-color)";
      home.style.color = "var(--first-color)";
    
    };

    const slideMenu3 = () => {
      capability.style.color = "var(--font-color2)";
      slider.style.left = "50%";
      project.style.color = "var(--first-color)";
      about.style.color = "var(--first-color)";
      home.style.color = "var(--first-color)";
 
    };

    const slideMenu4 = () => {
      project.style.color = "var(--font-color2)";
      slider.style.left = "75%";
      home.style.color = "var(--first-color)";
      about.style.color = "var(--first-color)";
      capability.style.color = "var(--first-color)";
    
    };
    // scrolling function for header 
const scrollfuction = () =>{
  if(window.pageYOffset > 1){
    navbar.style.background = "var(--sub-body-color)";
    menutoggle.style.boxShadow = "none";
    navbar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2)";
  }
else{
  navbar.style.background = "none";
  navbar.style.boxShadow = "none"
  menutoggle.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2)";
}
}
window.addEventListener("scroll",scrollfuction)


    home.addEventListener("click", slideMenu1);
    about.addEventListener("click", slideMenu2);
    capability.addEventListener("click", slideMenu3);
    project.addEventListener("click", slideMenu4);
  } else {
    const slideMenu1 = () => {
      slider.style.left = "0%";
      homeicon.style.color = "var(--font-color2)";
      capabilityicon.style.color = "var(--first-color)";
      abouticon.style.color = "var(--first-color)";
      projecticon.style.color = "var(--first-color)";
      document.location.href = "#home-section";
    };

    homeicon.addEventListener("click", slideMenu1);
    const slideMenu2 = () => {
      slider.style.left = "25%";
      abouticon.style.color = "var(--font-color2)";
      capabilityicon.style.color = "var(--first-color)";
      projecticon.style.color = "var(--first-color)";
      homeicon.style.color = "var(--first-color)";
      document.location.href = "#about-section";
    };
    abouticon.addEventListener("click", slideMenu2);

    const slideMenu3 = () => {
      slider.style.left = "50%";
      capabilityicon.style.color = "var(--font-color2)";
      projecticon.style.color = "var(--first-color)";
      abouticon.style.color = "var(--first-color)";
      homeicon.style.color = "var(--first-color)";
      document.location.href = "#capability-section";
    };
    capabilityicon.addEventListener("click", slideMenu3);
    const slideMenu4 = () => {
      slider.style.left = "75%";
      projecticon.style.color = "var(--font-color2)";
      homeicon.style.color = "var(--first-color)";
      abouticon.style.color = "var(--first-color)";
      capabilityicon.style.color = "var(--first-color)";
      document.location.href = "#project-section";
    };
    projecticon.addEventListener("click", slideMenu4);
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
