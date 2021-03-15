import $ from 'jquery';

window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';
import 'slick-carousel';

import "@scss/main.scss";

$(document).ready(function () {
    

    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });



    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(window).scroll(function () {

        if ($(window).scrollTop() > 750) {

            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });

    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
        $('.home-languages').toggleClass('open-menu');
        $('.home-job').toggleClass('open-menu');
    });
});