import coffeeImage from './coffee-cup-coffee-beans.png';

function createHome(displayArea) {
  const h2 = document.createElement('h2');
  h2.textContent = '25 Years of Coffee and Community';

  const mainImage = new Image();
  mainImage.src = coffeeImage;
  mainImage.id = 'main-image';

  const description = document.createElement('h3');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus. At auctor urna nunc id cursus metus aliquam eleifend mi.'
  description.classList.add('description');

  displayArea.appendChild(h2);
  displayArea.appendChild(mainImage);
  displayArea.appendChild(description);


}

export { createHome };

/*
<h1>LeCoffee Cafe</h1>
<h2>25 Years of Coffee and Community</h2>
<img 
  src="../src/coffee-cup-coffee-beans.png" 
  alt="A coffee cup and a bag of coffee beans on a table"
>
<h3>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Convallis aenean et tortor at risus. At auctor urna nunc id 
  cursus metus aliquam eleifend mi.
</h3>
*/