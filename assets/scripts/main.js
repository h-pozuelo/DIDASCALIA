$(document).ready(function () {

    const smallScreens = 600 - getScrollbarWidth();
    const mediumScreens = 900 - getScrollbarWidth();
    const largeScreens = 1200 - getScrollbarWidth();

    if ($(window).width() < largeScreens) {
        $('.tarjeta.toggleClass').not('.slider .tarjeta.toggleClass').removeClass('tarjeta-horizontal');
    }

    if ($(window).width() < mediumScreens) {
        $('.slider .tarjeta.toggleClass').removeClass('tarjeta-horizontal');
    }

    window.matchMedia(`(min-width: ${largeScreens}px)`).addListener(function () {
        if (window.matchMedia(`(min-width: ${largeScreens}px)`).matches) {
            $('.columna-izquierda, .columna-izquierda img, .columna-izquierda span').removeClass('menu-abierto');
            $('.boton-menu').prevAll('ul').removeClass('menu-abierto');
            $('.boton-menu').removeClass('menu-abierto');
            $('.tarjeta.toggleClass').not('.slider .tarjeta.toggleClass').addClass('tarjeta-horizontal');
        } else {
            $('.tarjeta.toggleClass').not('.slider .tarjeta.toggleClass').removeClass('tarjeta-horizontal');
        }
    });

    window.matchMedia(`(min-width: ${mediumScreens}px)`).addListener(function () {
        if (window.matchMedia(`(min-width: ${mediumScreens}px)`).matches) {
            $('.slider .tarjeta.toggleClass').addClass('tarjeta-horizontal');
        } else {
            $('.slider .tarjeta.toggleClass').removeClass('tarjeta-horizontal');
        }
    });

    $('.cabecera .fila .columna-izquierda, .pie .fila.fila-superior .columna-izquierda').on('click', function () {
        window.location.href = 'home.html';
    });

    $('.cabecera .fila .columna-derecha ul li:has(ul) > a').on('click', function () {
        $(this).toggleClass('submenu-abierto');
        $(this).parent().children('ul').first().slideToggle();
    });

    $('.cabecera .fila .columna-derecha ul li:has(ul)').on('mouseleave', function () {
        $(this).children('a').first().removeClass('submenu-abierto');
        $(this).children('ul').first().slideUp();
    });

    $('.boton-menu').click(function () {
        $('.columna-izquierda, .columna-izquierda img, .columna-izquierda span').toggleClass('menu-abierto');
        $(this).prevAll('ul').toggleClass('menu-abierto');
        $(this).toggleClass('menu-abierto');
    });

    $('.slider').bxSlider();

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

});
