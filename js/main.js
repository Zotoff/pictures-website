$(document).ready(function(){
    /*Sliders*/
    var examplesSlider = new Swiper (`.examples__slider__container`, {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 19,
        navigation: {
            nextEl: `.examples__slider__next`,
            prevEl: `.examples__slider__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 19,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 19,
            }
        }
    })
    var reviewsSlider = new Swiper (`.whatcan__slider`, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: `.review__swiper__next`,
            prevEl: `.review__swiper__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 300
            },
            375: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 350
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 375
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
                width: 430
            },
            780: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
                width: 600
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 19,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 19,
                centeredSlides: true
            }
        }
    })
    var pricesSlider = new Swiper (`.prices__slider`, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: `.prices__slider__next`,
            prevEl: `.prices__slider__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                width: 280,
                centeredSlides: true
            },
            375: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 350
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                width: 300,
                centeredSlides: true
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40,
                width: 600
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
                width: 700
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 19,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 19,
                width: 1130
            }
        }
    })
    var styleSlider = new Swiper (`.style__slider`, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: `.style__slider__next`,
            prevEl: `.style__slider__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                width: 280,
                centeredSlides: true
            },
            375: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 350
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                width: 300,
                centeredSlides: true
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40,
                width: 600,
                centeredSlides: true
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
                width: 700,
                centeredSlides: true
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 19,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 19,
                width: 1130
            }
        }
    })
    var picturesSlider = new Swiper (`.pictures__slider`, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: `.pictures__slider__next`,
            prevEl: `.pictures__slider__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                width: 280,
                centeredSlides: true
            },
            375: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 350
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 19,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 22,
                width: 1130
            }
        }
    })
    var framesSlider = new Swiper (`.frames__slider`, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: `.frames__slider__next`,
            prevEl: `.frames__slider__prev`,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                width: 280,
                centeredSlides: true
            },
            375: {
                slidesPerView: 1,
                centeredSlides: true,
                width: 350
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 22,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 22,
                width: 1130
            }
        }
    })
    var testimonialsSlider = new Swiper (`.testimonials__slider`, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: `.testimonials__slider__next`,
            prevEl: `.testimonials__slider__prev`,
        }
    })

    $(`[data-fancybox="gallery"]`).fancybox({
        btnTpl: {
            arrowLeft:
            `<button data-fancybox-prev class="review__swiper__prev" title="{{PREV}}">` +
            "</button>",

            arrowRight:
            `<button data-fancybox-next class="review__swiper__next" title="{{NEXT}}">` +
            "</button>"
        }
    });

    /*Menus*/
    $(`.menu-hamburger`).on(`click`, function(e){
        e.preventDefault();
        $(`#modal-menu`).fadeToggle();
    });
    $(`.modal-menu__close`).on(`click`, function(e){
        e.preventDefault();
        $(`#modal-menu`).fadeOut();
    });
    
    /*Forms and prices*/

    let priceText = $('#price');
    
        calculatePrice = () => {
        console.log('Calculating...');
        let sizePrice = +$('select#size').val();
        let viewPrice = +$('select#view').val();
        let stylePrice = +$('select#style').val();
        let framePrice = +$('select#frame').val();
        let servicePrice = +$('select#services').val();
        let finalPrice = sizePrice + viewPrice + stylePrice + framePrice + servicePrice;
        priceText.text(finalPrice);
    }

    $('#size').change(()=>{
        calculatePrice();
    });
    $('#view').change(()=>{
        calculatePrice();
    });
    $('#style').change(()=>{
        calculatePrice();
    });
    $('#frame').change(()=>{
        calculatePrice();
    });
    $('#services').change(()=>{
        calculatePrice();
    });
    

    $(`#orderForm`).validate({
        submitHandler(form) {
            let orderName = $(`input[name=ordercall-name]`).val();
            let orderPhone = $(`input[name=ordercall-phone]`).val();
            let orderUrl = form.getAttribute(`action`);
            $.ajax({
                type: "GET",
                url: orderUrl,
                data: {name: orderName, phone: orderPhone}
            }).done(function( msg ) {
                form.reset();
                let orderMessage = $(`#orderMessage`);
                orderMessage.text(`Информация успешно отправлена`);
                orderMessage.attr(`data-success`, true);
            }).fail(function() {
                let orderMessage = $(`#orderMessageMessage`);
                orderMessage.text(`При отправке вашего запроса возникла ошибка. Попробуйте еще раз!`)
                console.log(`Something wrong`);
                orderMessage.attr(`data-success`, false);
            });
        }
    });

    $('#bottomForm').validate({
        submitHandler(form) {
            let formData = form.serialize();
            let orderUrl = form.getAttribute(`action`);
            $.ajax({
                type: "POST",
                url: "http://httpbin.org/post",
                data: formData
            }).done(function( msg ) {
                form.reset();
                let orderMessage = $(`#orderMessage`);
                orderMessage.text(`Информация успешно отправлена`);
                orderMessage.attr(`data-success`, true);
            }).fail(function() {
                let orderMessage = $(`#orderMessageMessage`);
                orderMessage.text(`При отправке вашего запроса возникла ошибка. Попробуйте еще раз!`)
                console.log(`Something wrong`);
                orderMessage.attr(`data-success`, false);
            });
        }
    })

    const modalCloseButton = $(`#modalCloseButton`);
    $(`#modalCloseButton`).on(`click`, function(evt) {
        evt.preventDefault();
        console.log(`close`);
        $(`#modal-ordercall`).css(`display`, `none`);
    });
});

const closeModal = (evt) => {
    evt.preventDefault();
    const modalWindow = document.querySelector(`#modal-ordercall`);
    
    if (modalWindow.style.display === `block`) {
        modalWindow.style.display = `none`;
    }
};

const openModal = (evt) => {
    evt.preventDefault();
    const modalWindow = document.querySelector(`#modal-ordercall`);
    modalWindow.style.display = `block`;
}

const orderButtons = document.querySelectorAll(`.orderButton`);

orderButtons.forEach((button) => {
    button.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        openModal(evt)
    }
    );
});

const checkKeyDownEvent = (evt, key, cb) => {
    if (evt.key === key) {
      cb(evt); 
    }
  };

document.addEventListener(`keydown`, function(evt){
    checkKeyDownEvent(evt, `Escape`, closeModal);
    const orderButtons = document.querySelectorAll(`.orderButton`);
    orderButtons.forEach((button) => {
        button.removeEventListener(`click`, openModal);
    });
});