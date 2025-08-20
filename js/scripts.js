const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
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
