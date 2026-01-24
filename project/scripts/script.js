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

function changeBigImage(clickElement, width, height) {
  $(clickElement).on('click', '.swiper-slide', function () {
    const imgSrc = $(this).find('img').attr('src')
    $('.img__product__fruit img:first').attr('src', imgSrc).css({ width: width, height: height })
  })
}

changeBigImage('.vertical-swiper', '380px', '255px')
changeBigImage('.horizontal-slider', '200px', '134px')

const buttons = document.querySelectorAll('.fruit__oreder__btn')
buttons[0].classList.add('active')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active'))
    this.classList.add('active')
  })
})

$(document).ready(function () {
  const $dropdown = $('.dropdown');
  const $menu = $('.menu');
  const $body = $('body');
  
  $('.header__burger').click(function(e) {
    e.preventDefault();
    $dropdown.css('display', 'flex');
    $menu.addClass('open');
    $body.addClass('no-scroll');
  });
  
  $('.close_dropdown').click(function(e) {
    e.preventDefault();
    $dropdown.css('display', 'none');
    $menu.removeClass('open');
    $body.removeClass('no-scroll');
  });
  
  $('.header__items').click(function() {
    $dropdown.css('display', 'none');
    $menu.removeClass('open');
    $body.removeClass('no-scroll');
  });
});





$(document).ready(function () {
  function initPhoneMask() {
    $('#phone').on('input', function () {
      const $input = $(this);
      const value = $input.val();
      let phoneNumber = '';
  
      for (let char of value) {
        if (char >= '0' && char <= '9') {
          phoneNumber += char;
        }
      }
      
      phoneNumber = phoneNumber.substring(0, 11);
      
      $input.val(phoneNumber);
      
      $input.parent().removeClass('error');
      $input.next('.error-message').hide();
    });
  }
  
  function validateForm() {
    const name = $('#name').val()
    const phone = $('#phone').val()
    let isValid = true;
    
    $('.form-group').removeClass('error');
    $('.error-message').hide();
    
    if (name.length < 2) {
      $('#nameError').text('Минимум 2 буквы').show();
      $('#name').parent().addClass('error');
      isValid = false;
    }
    
    let phoneDigits = '';
    for (let i = 0; i < phone.length; i++) {
      const char = phone[i];
      if (char >= '0' && char <= '9') {
        phoneDigits += char;
      }
    }
    
    if (phoneDigits.length === 0) {
      $('#phoneError').text('Введите номер телефона').show();
      $('#phone').parent().addClass('error');
      isValid = false;
    } else if (phoneDigits.length < 10) {
      $('#phoneError').text('Минимум 10 цифр').show();
      $('#phone').parent().addClass('error');
      isValid = false;
    }
    
    return { isValid, name, phoneDigits };
  }
  
  function openOrderPopup() {
    $('#orderForm')[0].reset();
    $('.error-message').hide();
    $('.form-group').removeClass('error');
    $('#popupSuccessMessage').hide();
    $('#orderForm').show();
    $('#orderPopup').addClass('active');
    $('body').addClass('no-scroll');
  }
  
  function closeOrderPopup() {
    $('#orderPopup').removeClass('active');
    $('body').removeClass('no-scroll');
  }
  
  function clearFieldError() {
    $(this).parent().removeClass('error');
    $(this).next('.error-message').hide();
  }
  
  initPhoneMask();
  
  $('.btn__order__fruit, .product__day .btn').click(function (e) {
    e.preventDefault();
    if ($(this).text().includes('Заказать')) {
      openOrderPopup();
    }
  });
  
  $('.popup-close').click(closeOrderPopup);
  
  
  $('#orderForm').submit(function (e) {
    e.preventDefault();
    
    const validation = validateForm();
    
    if (!validation.isValid) {
      return;
    }
    
    const $btn = $('.popup-submit-btn');
    $btn.prop('disabled', true).text('Отправка...');
    
    $.ajax({
      url: 'https://testologia.ru/checkout',
      type: 'POST',
      dataType: 'json',
      data: {
        name: validation.name,
        phone: validation.phoneDigits,
      },
      success: function (response) {
        $btn.prop('disabled', false).text('Отправить заявку');
        
        if (response.success === 1) {
          alert('Ошибка при отправке!');
        } else if (response.success === 0) {
          $('#orderForm').hide();
          $('#popupSuccessMessage').show();
          
          setTimeout(closeOrderPopup, 5000);
        }
      },
      error: function() {
        $btn.prop('disabled', false).text('Отправить заявку');
        alert('Произошла ошибка сети. Попробуйте еще раз.');
      }
    });
  });
  
  $('#name').on('input', clearFieldError);
  $('#phone').on('input', clearFieldError);
});