let swiper = new Swiper('.reviews__slider .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 15,
  centeredSlides: false,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 1,
    },

    775: {
      slidesPerView: 2,
      centeredSlides: false,
        spaceBetween: 15,

    },
  },
})

let verticalSwiper = new Swiper('.vertical-swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 34,
  centeredSlides: false,
  navigation: {
    nextEl: '.vertical-next',
    prevEl: '.vertical-prev',
  },
  autoHeight: false,
  slideToClickedSlide: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
})

let horizontalSwiper = new Swiper('.horizontal-swiper', {
  loop: true,
  slidesPerView: 3, 
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: '.h-next',
    prevEl: '.h-prev',
  },
})

$('.vertical-swiper .swiper-slide').click(function () {
  const imgSrc = $(this).find('img').attr('src')
  const $bigImage = $('.img__product__fruit img:first')

  $bigImage.attr('src', imgSrc)

  $bigImage.css({
    width: '380px',
    height: '255px',
    // 'object-fit': 'contain',
  })
})


$('.horizontal-slider .swiper-slide').click(function () {
  const imgSrc = $(this).find('img').attr('src')
  const $bigImage = $('.img__product__fruit img:first')

  $bigImage.attr('src', imgSrc)

  $bigImage.css({
    width: '200px',
    height: '134px',
    // 'object-fit': 'contain',
  })
})
