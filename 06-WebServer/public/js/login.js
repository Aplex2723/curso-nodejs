import { showRegister, showLogin, cambiarBotonSucces } from './functions.js';

const tabLogin = document.querySelector('#tab-login')
const tabRegister = document.querySelector('#tab-register');
const registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click', () => {
    showRegister()
    cambiarBotonSucces(tabLogin, tabRegister)
})

tabRegister.addEventListener('click', () => {
    showRegister()
    cambiarBotonSucces(tabLogin, tabRegister)
})

tabLogin.addEventListener('click', () => {
    showLogin()
    cambiarBotonSucces(tabRegister, tabLogin)
})

gsap.from('.form-outline', {
    duration: 2,
    ease: 'elastic',
    opacity: 0,
    y: 200
})

gsap.from(".fab", 1, {
    scale: 0, 
    y: 60, 
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 0.7,
      grid: "auto",
      from: "center"
    }
  });