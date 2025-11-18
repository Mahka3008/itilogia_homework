window.onload = function () {
  let fullName = document.getElementById('FullName')
  fullName.onkeydown = e => {
    let number = parseInt(e.key)
    if (!isNaN(number)) {
      return false
    }
  }

  let lastName = document.getElementById('lastName')
  lastName.onkeydown = e => {
    if (e.key === ',' || e.key === '.') {
      return false
    }
  }

  let agreement = document.getElementById('agreement')
  agreement.onchange = function () {
    if (this.checked) {
      console.log('Согласен')
    } else {
      console.log('Не согласен')
    }
  }

  document.querySelector('form').onsubmit = function (e) {
    e.preventDefault()

    let fullName = document.getElementById('FullName')
    let lastName = document.getElementById('lastName')
    let mail = document.getElementById('mail')
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeatPassword')
    let agreement = document.getElementById('agreement')

    if (fullName.value.trim() === '') {
      alert('Заполните поле Full Name')
      fullName.focus()
      return false
    }

    if (lastName.value.trim() === '') {
      alert('Заполните поле Your username')
      lastName.focus()
      return false
    }

    if (mail.value.trim() === '') {
      alert('Заполните поле E-mail')
      mail.focus()
      return false
    }

    if (password.value.trim() === '') {
      alert('Заполните поле password')
      password.focus()
      return false
    }

    if (repeatPassword.value.trim() === '') {
      alert('Заполните поле repeat password')
      repeatPassword.focus()
      return false
    }

    if (!agreement.checked) {
      alert('Необходимо согласиться с Terms of Service and Privacy Statement')
      return false
    }

    if (password.value.length < 8) {
      alert('Пароль должен содержать от восьми символов')
      fullName.focus()
      return false
    }

    if (password.value !== repeatPassword.value) {
      alert('Пароли должны совпадать')
      fullName.focus()
      return false
    }

    let popup = document.getElementById('popup')
    popup.style.display = 'block'

    let popBtn = document.getElementById('pop-btn')

    popBtn.onclick = function () {
      popup.style.display = 'none'
      form.reset()
    }
  }

  let already = document.getElementById('already')
  let popup = document.getElementById('popup')
  let popBtn = document.getElementById('pop-btn')
  let form = document.querySelector('form')

  let isLoginMode = false

  function switchToLoginMode() {
    let isLoginMode = true

    let title = document.querySelector('form h1')
    if (title) {
      title.textContent = 'Log in to the system'
    }

    let fullNameLabel = document.getElementById('deletFullName')
    fullNameLabel.remove()

    let mailLabel = document.getElementById('deletMail')
    mailLabel.remove()

    let repeatPasswordLabel = document.getElementById('deletRepeatPassword')
    repeatPasswordLabel.remove()

    let agreementLabel = document.getElementById('deleteAgreement')
    agreementLabel.remove()

    let btn = document.getElementById('btn')

    btn.textContent = 'Sign in'

    if (already) {
      already.style.display = 'none'
    }

    let lastNameLabel = document.querySelector('label[for="lastName"]')
    if (lastNameLabel) {
      lastNameLabel.innerHTML = 'Username <input type="text" name="lastName" id="lastName" />'
    }
  }


  if (already) {
    already.addEventListener('click', function (e) {
      e.preventDefault()
      switchToLoginMode()
    })
  }

  popBtn.addEventListener('click', function () {
    popup.style.display = 'none'
    form.reset()
    switchToLoginMode()
  })

  
}
