function createMenu(displayArea) {
  // coffee section 
  const coffeeSection = document.createElement('div');
  coffeeSection.classList.add('coffee-section');

  const coffee = document.createElement('h3');
  coffee.textContent = 'Coffee';
  
  const americano = document.createElement('p')
  americano.classList.add('americano');
  americano.textContent = 'Americano (200ml - $3.00)';
  const cappucino = document.createElement('p')
  cappucino.classList.add('cappucino');
  cappucino.textContent = 'Cappucino (200ml - $3.20)';
  const macchiato = document.createElement('p')
  macchiato.classList.add('macchiato');
  macchiato.textContent = 'Macchiato (200ml - $3.35)';
  const espresso = document.createElement('p')
  espresso.classList.add('espresso');
  espresso.textContent = 'Espresso (100ml - $2.95)';
  const mocha = document.createElement('p')
  mocha.classList.add('mocha');
  mocha.textContent = 'Mocha (200ml - $3.30)';

  coffeeSection.appendChild(coffee);
  coffeeSection.appendChild(americano);
  coffeeSection.appendChild(cappucino);
  coffeeSection.appendChild(macchiato);
  coffeeSection.appendChild(espresso);
  coffeeSection.appendChild(mocha);

  // hot drinks section 
  const hotDrinksSection = document.createElement('div');
  hotDrinksSection.classList.add('hot-drinks-section');

  const hotDrinks = document.createElement('h3');
  hotDrinks.textContent = 'Hot Drinks';
  
  const hotChocolate = document.createElement('p')
  hotChocolate.classList.add('hotChocolate');
  hotChocolate.textContent = 'Hot Chocolate (200ml - $3.00)';
  const whiteChocolate = document.createElement('p')
  whiteChocolate.classList.add('whiteChocolate');
  whiteChocolate.textContent = 'White Chocolate (200ml - $3.20)';
  const vanilaTea = document.createElement('p')
  vanilaTea.classList.add('vanilaTea');
  vanilaTea.textContent = 'Vanila Tea (200ml - $3.35)';
  const greenTea = document.createElement('p')
  greenTea.classList.add('greenTea');
  greenTea.textContent = 'Green Tea (100ml - $2.95)';

  hotDrinksSection.appendChild(hotDrinks);
  hotDrinksSection.appendChild(hotChocolate);
  hotDrinksSection.appendChild(whiteChocolate);
  hotDrinksSection.appendChild(vanilaTea);
  hotDrinksSection.appendChild(greenTea);

  // dessert section 
  const dessertSection = document.createElement('div');
  dessertSection.classList.add('dessert-section');

  const dessert = document.createElement('h3');
  dessert.textContent = 'Desserts';
  
  const sweets = document.createElement('p')
  sweets.classList.add('sweets');
  sweets.textContent = 'Sweets (100g - $4.20)';
  const cupcake = document.createElement('p')
  cupcake.classList.add('cupcake');
  cupcake.textContent = 'Cupcake (100g - $3.80)';
  const doughnut = document.createElement('p')
  doughnut.classList.add('doughnut');
  doughnut.textContent = 'Doughnut (200g - $4.35)';
  const croissant = document.createElement('p')
  croissant.classList.add('croissant');
  croissant.textContent = 'Croissant (150g - $3.95)';
  const cheesecake = document.createElement('p')
  cheesecake.classList.add('cheesecake');
  cheesecake.textContent = 'Cheesecake (150g - $4.95)';
  
  dessertSection.appendChild(dessert);
  dessertSection.appendChild(sweets);
  dessertSection.appendChild(cupcake);
  dessertSection.appendChild(doughnut);
  dessertSection.appendChild(croissant);
  dessertSection.appendChild(cheesecake);



  
  displayArea.appendChild(coffeeSection);
  displayArea.appendChild(hotDrinksSection);
  displayArea.appendChild(dessertSection);

}

export { createMenu };