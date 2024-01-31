$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_catalog').each(function (i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    });

    $('[data-modal=buy]').on('click', function () {
        $('.overlay, #order').fadeOut(0);
        $('.overlay, #thanks').fadeIn();
    });

    // Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
});


let wrappers = document.querySelectorAll('.catalog-item__wrapper')
let links = document.querySelectorAll('.catalog-item__link')

function eventLink(e) {
    let index = Array.from(links).indexOf(e.target);
    let wrapper = wrappers[index]

    if (wrapper.classList.contains('catalog-item__wrapper_active')) {
        wrapper.classList.remove('catalog-item__wrapper_active')
        links[index].textContent = "ПОДРОБНЕЕ"
    }
    else {
        wrapper.classList.add('catalog-item__wrapper_active')
        links[index].textContent = "НАЗАД"
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', eventLink)
}