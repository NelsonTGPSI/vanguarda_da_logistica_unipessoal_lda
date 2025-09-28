// Menu mobile: abre/fecha ao clicar no botão
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Destaca o link da seção ativa ao rolar a página
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140; // ajuste conforme seu header
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Scroll suave ao clicar nos links do menu
navLinksList.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 120, // ajuste conforme seu header
        behavior: 'smooth'
      });
    }
  });
});
// Accordion dos serviços
document.querySelectorAll('.accordion-title').forEach(btn => {
  btn.addEventListener('click', function() {
    // Fecha todos os outros
    document.querySelectorAll('.accordion-content').forEach(content => {
      if (content !== btn.nextElementSibling) {
        content.classList.remove('open');
        content.previousElementSibling.classList.remove('active');
      }
    });
    // Alterna o atual
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toggle('open');
  });
});
