function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Typewriter Effect
const roles = ["IT Student", "Future Software Developer", "Web Developer"];
let index = 0, charIndex = 0, currentRole = "";
const typing = document.getElementById("typing");

function type() {
  if (charIndex < roles[index].length) {
    currentRole += roles[index].charAt(charIndex);
    typing.textContent = currentRole;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    currentRole = currentRole.slice(0, -1);
    typing.textContent = currentRole;
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 100);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Animate skill bars
const skillBars = document.querySelectorAll(".bar div");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => observer.observe(bar));

// Form Submission (demo)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Dynamic Projects
const projects = [
  {
    title: "Portfolio Website 1",
    description: "Personal website showcasing my skills.",
    image: "assets/img/project1.jpg",
    live: "https://babyanushachekuri.github.io/portfolio-website/",
    github: "https://github.com/babyanushachekuri/portfolio-website/"
  },
  {
    title: "Portfolio Website 2",
    description: "Another modern UI portfolio website.",
    image: "assets/img/project2.jpg",
    live: "https://yourusername.github.io/project2/",
    github: "https://github.com/your-github/project2"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.querySelector(".project-container");
  projects.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-aos", "flip-left");

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.live}" target="_blank">View Live</a>
      <a href="${proj.github}" target="_blank">GitHub</a>
    `;

    projectContainer.appendChild(card);
  });
});
