new WOW({
  animateClass: 'animate__animated',
}).init()


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
      spaceBetween: 100,
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

const buttons = document.querySelectorAll('.fruit__oreder__btn')

buttons[0].classList.add('active')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active'))
    this.classList.add('active')
  })
})

$('#burger').click(function () {
  $('#dropdown').css({
    display: 'block',
  })
})

$('#close_dropdown').click(function () {
  $('#dropdown').css({
    display: 'none',
  })
})

$('.items').click(function () {
  $('#dropdown').css({
    display: 'none',
  })
})

$(document).ready(function () {
  $('.btn__order__fruit, .product__day .btn').click(function (e) {
    e.preventDefault()
    if ($(this).text().includes('Заказать')) {
      $('#orderForm')[0].reset()
      $('.error-message').hide()
      $('.form-group').removeClass('error')
      $('#popupSuccessMessage').hide()
      $('#orderForm').show()

      $('#orderPopup').addClass('active')
      $('body').addClass('no-scroll')
    }
  })

  $('.popup-close').click(function () {
    $('#orderPopup').removeClass('active')
    $('body').removeClass('no-scroll')
  })

  $('#orderForm').submit(function (e) {
    e.preventDefault()

    let name = $('#name').val()
    let phone = $('#phone').val()

    if (name.length < 2) {
      $('#nameError').text('Минимум 2 буквы').show()
      $('#name').parent().addClass('error')
      return
    }

    if (phone.length < 5) {
      $('#phoneError').text('Введите телефон').show()
      $('#phone').parent().addClass('error')
      return
    }

    var $btn = $('.popup-submit-btn')
    $btn.prop('disabled', true).text('Отправка...')

    $.ajax({
      url: 'https://testologia.ru/checkout',
      type: 'POST',
      dataType: 'json',
      data: {
        name: name,
        phone: phone,
      },
      success: function (response) {
        $btn.prop('disabled', false).text('Отправить заявку')

        if (response.success === 1) {
          console.log(1)
          alert('Ошибка при отправке!')
        } else if (response.success === 0) {
          console.log(0)

          $('#orderForm').hide()
          $('#popupSuccessMessage').show()

          setTimeout(function () {
            $('#orderPopup').removeClass('active')
            $('body').removeClass('no-scroll')
          }, 5000)
        }
      },
    })
  })


  $('#name, #phone').on('input', function () {
    $(this).parent().removeClass('error')
    $(this).next('.error-message').hide()
  })
})
