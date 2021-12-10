import './style.css';

const content = document.querySelector('#content');

const createHeader = (() => {
  const header = document.createElement('div');
  header.classList.add('header');
  
  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = 'LeCoffee Cafe';

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
  

  
  // test 
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  header.appendChild(logo);
  header.appendChild(nav);

  content.appendChild(header);

})();

