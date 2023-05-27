const burger = document.querySelector('.section_left__burger');
const dropdown = document.querySelector('.dropdown');

burger.addEventListener('click', (e) => {
    dropdown.classList.toggle('dropdownActive');
})