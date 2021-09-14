$(function () {
    $('.button').click(function () {
        $('.header__menu_box_block').toggleClass('active');
    })
    $('.header__menu_box_block_icon ').click(function () {
        $('.header__menu_box_block').toggleClass('active');
    })
    $(window).resize(function () {
        if ($(window).width() < 600) {
            $('.header__menu_box_block').toggleClass('active');
        }
    })

    class tabs {
        constructor(tab) {
            $(tab).find('.header__fon_text_button_knopka').click(function () {
                $(tab).find('.header__fon_text_button_knopka').removeClass('active').eq($(this).index()).addClass('active');
            })
        }
    }

    let wrap = $('.header__fon_text');
    for (let i of wrap) {
        i = new tabs(i);
    }

    $('.icon__next').on('click', function () {
        $('.icon__next_btn').toggle(500);
    })

    $('.icon__start').on('click', function () {
        $('.icon__next_btn').toggle(500);
    })
})
$('.header__menu_login_button').click(function () {
    $('.header__menu_box').toggle();
})
$('.b').hide();
$('.b').click(function () {
    $('.header__menu_box_block_nav_ul').toggle();
})
$('.button').click(function () {
    
})
