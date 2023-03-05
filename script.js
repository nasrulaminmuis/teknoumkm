const navbarToggler = document.querySelector('.navbar-toggler');
const navMenuMobile = document.querySelector('.nav-menu-mobile');
const navbarCloseBtn = document.querySelector('.navbar-close-btn');

navbarToggler.addEventListener('click', function() {
  navMenuMobile.classList.toggle('hidden');
});

navbarCloseBtn.addEventListener('click', function() {
    navMenuMobile.classList.toggle('hidden');
  });


// Ambil semua tombol "+" dan tambahkan event listener
const faqButtons = document.querySelectorAll('.faq-icon');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle kelas "hidden" pada elemen jawaban
    button.parentElement.nextElementSibling.classList.toggle('hidden');
  });
});