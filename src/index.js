import './style.css';

const content = document.querySelector('#content');

const createHeader = (() => {
  // header div 
  const header = document.createElement('div');
  header.classList.add('header');
  // top left logo 
  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = 'LeCoffee Cafe';
  // nav bar 
  const nav = document.createElement('div');
  nav.classList.add('nav');
  const home = document.createElement('h3');
  home.classList.add('home-nav');
  home.textContent = 'Home';
  const menu = document.createElement('h3');
  menu.classList.add('menu-nav');
  menu.textContent = 'Menu';
  const contact = document.createElement('h3');
  contact.classList.add('contact-nav');
  contact.textContent = 'Contact';
  // display area 
  const displayArea = document.createElement('div');
  displayArea.classList.add('display-area');

  // append nav to nav bar 
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  // append elements to header 
  header.appendChild(logo);
  header.appendChild(nav);
  // append elements to page 
  content.appendChild(header);
  content.appendChild(displayArea);
})();

