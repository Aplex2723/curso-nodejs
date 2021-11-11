import { showNav, showDrop, showProfileSettings } from './functions.js'

const buttonNav = document.querySelector('#button-navbar');
const dropdownToggle = document.querySelector('.dropdown-toggle')
//!     EventListeners
buttonNav.addEventListener('click', showNav)
dropdownToggle.addEventListener('click', showDrop)

const profileButton = document.querySelector('#navbarDropdownMenuLink');

profileButton.addEventListener('click', showProfileSettings)
