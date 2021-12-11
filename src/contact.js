import mapImage from './location.png';

function createContatct(displayArea) {
  // create top subdiv 
  const top = document.createElement('div');
  top.classList.add('top');
  top.appendChild(createLocationDiv());
  top.appendChild(createContactDiv());
  // add map location
  const mainImage = new Image();
  mainImage.src = mapImage;
  mainImage.id = 'map-image';

  displayArea.appendChild(top);
  displayArea.appendChild(mainImage);
}

function createLocationDiv() {
  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location');
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Location';
  const location = document.createElement('h4');
  location.textContent = '123 Main St. #4545';
  const location2 = document.createElement('h4');
  location2.textContent = '123 Herndon VA 22071-2716';
  
  locationDiv.appendChild(locationHeader);
  locationDiv.appendChild(location);
  locationDiv.appendChild(location2);

  return locationDiv;
}

function createContactDiv() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact';
  const phone = document.createElement('h4');
  phone.textContent = '(555) 555-5555';
  const email = document.createElement('h4');
  email.textContent = 'lecofeecafe@email.com';

  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);

  return contactDiv;
}

export { createContatct };