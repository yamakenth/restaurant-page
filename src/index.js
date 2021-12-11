import { createTheme } from './theme';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContatct } from './contact';
import './style.css';

// when page load
createTheme();
const displayArea = document.querySelector('.display-area');
createHome(displayArea);

// when home button is clicked 
const homeNav = document.querySelector('.home-nav');
homeNav.addEventListener('click', () => {
  clearDisplayArea();
  createHome(displayArea);
});

// when menu button is clicked 
const menuNav = document.querySelector('.menu-nav');
menuNav.addEventListener('click', () => {
  clearDisplayArea();
  createMenu(displayArea);
});

// when contact button is clicked 
const contactNav = document.querySelector('.contact-nav');
contactNav.addEventListener('click', () => {
  clearDisplayArea();
  createContatct(displayArea);
});

// clear display area when switching tabs 
function clearDisplayArea() {
  console.log('click');
  let child = displayArea.lastElementChild;
  while (child) {
    displayArea.removeChild(child);
    child = displayArea.lastElementChild;
  }
}