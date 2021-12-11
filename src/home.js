import coffeeImage from './coffee-cup-coffee-beans.png';

function createHome(displayArea) {
  // h2 
  const h2 = document.createElement('h2');
  h2.textContent = '25 Years of Coffee and Community';
  // center image 
  const mainImage = new Image();
  mainImage.src = coffeeImage;
  mainImage.id = 'main-image';
  // description of coffee shop 
  const description = document.createElement('h3');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus. At auctor urna nunc id cursus metus aliquam eleifend mi.'
  description.classList.add('description');

  // append elements to display area
  displayArea.appendChild(h2);
  displayArea.appendChild(mainImage);
  displayArea.appendChild(description);
}

export { createHome };