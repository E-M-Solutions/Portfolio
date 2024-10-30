// Fonction de défilement fluide avec animation de l'apparition des sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content");

  // Ajoute une classe visible aux sections quand elles entrent dans le champ de vision
  const revealSections = () => {
      const triggerPoint = window.innerHeight / 1.2;

      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < triggerPoint) {
              section.classList.add("visible");
          }
      });
  };

  // Défilement fluide avec animation
  document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Écouteur d'événement pour révéler les sections lors du défilement
  window.addEventListener("scroll", revealSections);
  revealSections();
});

// Animation abstraite avec Canvas
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particules
class Particle {
    constructor(x, y, size, speedX, speedY, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Effet de rebond
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 60, 90, ${this.opacity})`;
        ctx.fill();
    }
}

// Créer les particules
const particlesArray = [];
function initParticles() {
    particlesArray.length = 0; // Vide le tableau si redimensionné
    const numberOfParticles = 50; // Nombre de particules

    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 1;
        const speedY = (Math.random() - 0.5) * 1;
        const opacity = Math.random() * 0.5 + 0.1;
        particlesArray.push(new Particle(x, y, size, speedX, speedY, opacity));
    }
}

// Animation
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}

// Ajuste la taille du canvas quand la fenêtre est redimensionnée
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Initialiser et animer les particules
initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});
