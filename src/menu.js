const coffeeInput = [
  { className: 'americano', name: 'Americano', size: '200ml', price: '$3.00' },
  { className: 'cappucino', name: 'Cappucino', size: '200ml', price: '$3.20' },
  { className: 'macchiato', name: 'Macchiato', size: '200ml', price: '$3.35' },
  { className: 'espresso', name: 'Espresso', size: '100ml', price: '$2.95' },
  { className: 'mocha', name: 'Mocha', size: '200ml', price: '$3.30' },
]
const hotDrinksInput = [
  { className: 'hotChocolate', name: 'Hot Chocolate', size: '200ml', price: '$3.00' },
  { className: 'whiteChocolate', name: 'White hocolate', size: '200ml', price: '$3.20' },
  { className: 'vanilaTea', name: 'Vanila Tea', size: '200ml', price: '$3.35' },
  { className: 'greenTea', name: 'Green Tea', size: '200ml', price: '$2.95' },
]
const dessertsInput = [
  { className: 'sweets', name: 'Sweets', size: '100g', price: '$4.20' },
  { className: 'cupcake', name: 'Cupcake', size: '100g', price: '$3.80' },
  { className: 'doughnut', name: 'Doughnut', size: '200g', price: '$4.35' },
  { className: 'croissant', name: 'Croissant', size: '150g', price: '3.95' },
  { className: 'cheesecake', name: 'Cheesecake', size: '150g', price: '$4.30' },
]

function createMenu(displayArea) {
  // coffee section 
  const coffeeSection = createSection('coffee', 'Coffee', coffeeInput);
  displayArea.appendChild(coffeeSection);
  // hot drinks section 
  const hotDrinksSection = createSection('hot-drinks', 'Hot Drinks', hotDrinksInput);
  displayArea.appendChild(hotDrinksSection);
  // desserts section 
  const dessertsSection = createSection('desserts', 'Desserts', dessertsInput);
  displayArea.appendChild(dessertsSection);
}

function createSection(sectionName, title, items) {
  // create container div 
  const section = document.createElement('div');
  section.classList.add(`${sectionName}-section`);
  // title of section 
  const h3 = document.createElement('h3');
  h3.textContent = title;
  section.appendChild(h3);
  // append each menu item to section 
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const p = document.createElement('p')
    p.classList.add(item.className);
    p.textContent = `${item.name} (${item.size} - ${item.price})`;
    section.appendChild(p);
  }

  return section;
}

export { createMenu };