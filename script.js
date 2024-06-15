document.addEventListener('DOMContentLoaded', function () {
  const hamburgerOpen = document.querySelector('.hamburger-open');
  const hamburgerClose = document.querySelector('.hamburger-close');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  hamburgerOpen.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
    hamburgerOpen.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
  });

  hamburgerClose.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
    hamburgerOpen.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
  });
});
