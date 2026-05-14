const typingText = document.querySelector(".typing");

const roles = [
    "Web Developer",
    "GenAI Enthusiast",
    "Full Stack Learner",
    "Data Science Learner"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect,300);

    }

}

window.onload = typeEffect;
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

}
const hiddenElements =
document.querySelectorAll(
".about-container, .skill-card, .project-card, .featured-project, .education-card, .certificate-card, .contact-card, .resume-container"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});