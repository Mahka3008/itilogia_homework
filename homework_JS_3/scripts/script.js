window.onload = function () {
  let fullName = document.getElementById('fullName')
  let lastName = document.getElementById('lastName')
  let mail = document.getElementById('mail')
  let password = document.getElementById('password')
  let repeatPassword = document.getElementById('repeatPassword')
  let agreement = document.getElementById('agreement')
  let logIn = document.getElementById('logIn')
  let popup = document.getElementById('popup')
  let popBtn = document.getElementById('pop-btn')
  let form = document.querySelector('form')
  let btn = document.getElementById('btn')

  fullName.onkeydown = e => {
    let number = parseInt(e.key)
    if (!isNaN(number)) {
      return false
    }
  }

  lastName.onkeydown = e => {
    if (e.key === ',' || e.key === '.') {
      return false
    }
  }

  agreement.onchange = function () {
    this.checked ? console.log('Согласен') : console.log('Не согласен')
  }

  form.addEventListener('submit', isValid)

  function isValid(e) {
    e.preventDefault()

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

    popup.style.display = 'block'

    let popBtn = document.getElementById('pop-btn')

    popBtn.onclick = function () {
      popup.style.display = 'none'
      form.reset()
    }
  }

  function switchToLoginMode() {
    let title = document.querySelector('form h1')
    if (title) {
      title.textContent = 'Log in to the system'
    }

    let fullNameLabel = document.getElementById('deleteFullName')
    fullNameLabel.remove()

    let mailLabel = document.getElementById('deleteMail')
    mailLabel.remove()

    let repeatPasswordLabel = document.getElementById('deleteRepeatPassword')
    repeatPasswordLabel.remove()

    let agreementLabel = document.getElementById('deleteAgreement')
    agreementLabel.remove()

    btn.textContent = 'Sign in'

    if (logIn) {
      logIn.style.display = 'none'
    }

    form.removeEventListener('submit', isValid)

    form.addEventListener('submit', enter)

    function enter(e) {
      e.preventDefault()

      if (lastName.value === '') {
        alert('Заполните поле Username')
        lastName.focus()
        return false
      }
      if (password.value === '') {
        alert('Заполните поле password')
        password.focus()
        return false
        
      }
      alert(`Добро пожаловать, ${lastName.value}!`)
    }
  }

  if (logIn) {
    logIn.addEventListener('click', function (e) {
      e.preventDefault()
      form.reset()
      switchToLoginMode()
    })
  }

  popBtn.addEventListener('click', function () {
    popup.style.display = 'none'
    form.reset()
    switchToLoginMode()
  })
}
