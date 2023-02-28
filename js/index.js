
$(function () {
    'use strict';

    //adjust header height
    let myHeader = $('.header'),
        mySlider = $('.slider');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

        //adjust bbx slider list item center
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });
    });

    //links add active class
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //adjust bbx slider list item center
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });

    //trigger the bx slider
    mySlider.bxSlider({
        pager: false
    });

    //smooth scroll to div
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //our auto slider code
    (function autoSlider() {
        $('.sldr .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.sldr div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        })
    }());

    //trigger mixitup
    $('#Container').mixItUp();

    //adjust shuffle links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: '0'
    });
});

var buttonUp = document.getElementById('up');
window.onscroll = function () {
    window.pageYOffset >= window.innerHeight ? buttonUp.style.display = 'block' : buttonUp.style.display = 'none';
};

buttonUp.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};