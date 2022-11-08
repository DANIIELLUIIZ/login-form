const loginForm = document.querySelector('.form-login')
const loginTitle = document.querySelector('.login-title')
const footer = document.querySelector('.footer')
const registerForm = document.querySelector('.register-form')
const registerBtn = document.querySelector('#register')
const sendRegisterBtn = document.querySelector('#send-register-btn')
const cancelRegisterBtn = document.querySelector('#cancel-register-btn')

// ======================== FUNÇÕES =======================//

const toggleForms = () => {
  loginForm.classList.toggle('hide')
  footer.classList.toggle('hide')
  registerForm.classList.toggle('hide')
  loginTitle.classList.toggle('hide')
}

// ======================== Eventos =======================//

registerBtn.addEventListener('click', () => {
  toggleForms()
})

cancelRegisterBtn.addEventListener('click', () => {
  e.preventDefault()
  toggleForms()
})
