let burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('open');
});
