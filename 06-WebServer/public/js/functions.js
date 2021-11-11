
//* Navbar button activation
const showed = 'show'

export function showNav() {
    const button = document.querySelector('.navbar-collapse');
    const showBar = document.querySelector('.show');

    if(!button.classList.contains(showed)) {
        button.classList.add('show');

    } else {
        button.classList.remove('show')
    }

    
}


export function showDrop() {
    const dropdownToggle = document.querySelector('.dropdown-menu');
    const show = document.querySelector('.show')

    if(!show) {
        dropdownToggle.classList.add('show');

    } else {
        dropdownToggle.classList.remove('show')
    }
}

export function execOnce(fn, context) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

export function showRegister() {
  const registro = document.querySelector('#pills-register');
  const login = document.querySelector('#pills-login')

  if(!registro.classList.contains(showed)) {

    login.classList.remove('show', 'active')
    registro.classList.add('show', 'active')

    gsap.from('.show', {
      duration: 2,
      opacity: 0,
      x: 50,
      ease: 'power4'
    })

  }

}

export function showLogin() {
  const showed = 'show'
  const registro = document.querySelector('#pills-register');
  const login = document.querySelector('#pills-login')

  if(!login.classList.contains(showed)) {
    registro.classList.remove('show', 'active')
    login.classList.add('show', 'active')

    gsap.from('.show', {
      duration: 1.5,
      opacity: 0,
      x: 50,
      ease: 'power4'
    })

  }

}

export function cambiarBotonSucces(btn1, btn2) {
  
  //Le quita al 1
  try {
    btn1.classList.remove('active', 'bg-danger')
    btn2.classList.add('active', 'bg-danger')
  } catch (error) {
    console.log(error)
  }
  
}

export function showProfileSettings(e) {
  const dropdownToggle = document.querySelector('#avatar')

  if(!dropdownToggle.classList.contains(showed)) {
    dropdownToggle.classList.add('show')

    gsap.from('#avatar', {
      duration: 1,
      opacity: 0,
      x: -100
    })
  } else {
    dropdownToggle.classList.remove('show')
  }

}