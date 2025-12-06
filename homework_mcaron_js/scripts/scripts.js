// document.getElementById('burger').onclick = function () {
//   document.getElementById('menu').classList.add('open')
// }

// document.querySelectorAll('#menu *').forEach(item => {
//   item.onclick = () => {
//     document.getElementById('menu').classList.remove('open')
//   }
// })

// let macaron = $('#macoron')
// let userName = $('#name')
// let numberPhone = $('#number')
// let btnForm = $('.btn___form')
// let loader = $('.loader__container')
// let isValid = true

// btnForm.on('click', function (e) {
//   e.preventDefault()
//   resetValidation()
//   if (!macaron.val().trim()) {
//     showError(macaron, 'Необходимо ввести название макаруна')
//     isValid = false
//   }

//   if (!userName.val().trim()) {
//     showError(userName, 'Необходимо ввести ваше имя')
//     isValid = false
//   }

//   if (!numberPhone.val().trim()) {
//     showError(numberPhone, 'Необходимо ввести номер телефона')
//     isValid = false
//   }

//   loader.show()

//   $.ajax({
//     url: 'https://testologia.ru/checkout',
//     type: 'POST',
//     dataType: 'json',
//     data: {
//       product: macaron.val(),
//       name: userName.val(),
//       phone: numberPhone.val(),
//     },
//     success: function (response) {
//       loader.hide()
//       if (response.success === 1) {
//         alert('Заказ успешно оформлен! Спасибо за заказ!')
//       } else {
//         alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.')
//       }
//     },
//   })
// })

// function resetValidation() {
//   $('.error-message').remove()
//   $('input').removeClass('error-input')
// }

// function showError(inputElement, message) {
//   inputElement.addClass('error-input')

//   let errorElement = $('<div class="error-message"></div>')
//   errorElement.text(message)
//   errorElement.css({
//     color: 'red',
//     'font-size': '12px',
//     'margin-top': '3px',
//     'margin-bottom': '10px',
//   })

//   inputElement.after(errorElement)
// }

// $(document).ready(function(){
//   $('.cards__macarons').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     infinite: false,
//     arrows: true,
//     dots: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: true
//         }
//       }
//     ]
//   });
// });

new WOW({
  animateClass: 'animate__animated',
}).init()

document.getElementById('burger').onclick = function () {
  document.getElementById('menu').classList.add('open')
}

document.querySelectorAll('#menu *').forEach(item => {
  item.onclick = () => {
    document.getElementById('menu').classList.remove('open')
  }
})

$(document).ready(function () {
  $('.cards__macarons').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  })

  let macaron = $('#macoron')
  let userName = $('#name')
  let numberPhone = $('#number')
  let btnForm = $('.btn___form')
  let loader = $('.loader__container')
  let formElement = $('form[method="POST"]')

  btnForm.on('click', function (e) {
    e.preventDefault()
    resetValidation()

    let isValid = true

    if (!macaron.val().trim()) {
      showError(macaron, 'Необходимо ввести название макаруна')
      isValid = false
    }

    if (!userName.val().trim()) {
      showError(userName, 'Необходимо ввести ваше имя')
      isValid = false
    }

    if (!numberPhone.val().trim()) {
      showError(numberPhone, 'Необходимо ввести номер телефона')
      isValid = false
    }

    if (!isValid) {
      return
    }

    loader.show()

    $.ajax({
      url: 'https://testologia.ru/checkout',
      type: 'POST',
      dataType: 'json',
      data: {
        product: macaron.val(),
        name: userName.val(),
        phone: numberPhone.val(),
      },
      success: function (response) {
        loader.hide()
        if (response.success === 1) {
          formElement.addClass('animate__animated animate__bounceOutRight')
          setTimeout(function () {
            formElement.hide()
            let formHeight = formElement.outerHeight()
            let successBlock = $(`
            <div class="success-block wow animate__bounceInLeft" style="
              display: flex;
              align-items: center;
              justify-content: center;
              height: ${formHeight}px;
              width: 100%;
              text-align: center;
              background: #ffefef;
              border-radius: 10px;
              padding: 20px;
              box-sizing: border-box;
              border: 3px solid #821328;
            ">
              <div class="success-text" style="
                font-family: 'GilroyEB';
                font-size: 22px;
                color: #821328;
                max-width: 400px;
              ">
                Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!
              </div>
            </div>
          `)
            successBlock.hide()
            formElement.after(successBlock)
            formElement.replaceWith(successBlock)

            setTimeout(function () {
              successBlock.show().addClass('animate__bounceInLeft')
            }, 50)
          }, 800)
        } else {
          alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.')
        }
      },
    })
  })

  function resetValidation() {
    $('.error-message').remove()
    $('input').removeClass('error-input')
  }

  function showError(inputElement, message) {
    inputElement.addClass('error-input')
    let errorElement = $('<div class="error-message"></div>')
    errorElement.text(message)
    inputElement.after(errorElement)
  }
})

$(document).ready(function () {
  $('.zoomimg').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },

    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  })
})
