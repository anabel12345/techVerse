// Function to generate a card element based on women in tech object data
export function createCard(obj) {
  // Create the main card container
  const card = document.createElement('div');
  card.classList.add('card');

  // Create inner div for card content
  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');
  card.appendChild(cardInner);

  // Create divs for front and back faces of the card
  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  cardInner.appendChild(cardFront);
  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  cardInner.appendChild(cardBack);

  // Check if 'image' property exists in the women in tech object
  if (Object.prototype.hasOwnProperty.call(obj, 'image')) {
    // If image property exists, create and append image element
    const img = document.createElement('img');
    img.setAttribute('src', obj.image);
    cardFront.appendChild(img);
  } else {
    // If 'image' property is missing, display an error message
    const error = document.createElement('p');
    error.textContent = 'Image Not Found! Hover over this card to see info about a woman in tech.';
    console.error('Image Not Found!');
    cardFront.appendChild(error);
  }

  // Check if 'name' property exists in the women in tech object
  if (Object.prototype.hasOwnProperty.call(obj, 'name')) {
    // If 'name' property exists, create and append name element to the back of the card
    const nameCont = document.createElement('div');
    nameCont.classList.add('name-container');
    cardBack.appendChild(nameCont);
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = obj.name;
    nameCont.appendChild(name);
  } else {
    // If 'name' property is missing, log an error
    console.error('Name Not Found!');
  }

  // Check if 'bio' property exists in the women in tech object
  if (Object.prototype.hasOwnProperty.call(obj, 'bio')) {
    // If 'bio' property exists, create and append bio element to the back of the card
    const bioCont = document.createElement('div');
    bioCont.classList.add('bio-container');
    cardBack.appendChild(bioCont);
    const bio = document.createElement('p');
    bio.classList.add('bio');
    bio.textContent = obj.bio;
    bioCont.appendChild(bio);
  } else {
    // If 'bio' property is missing, log an error
    console.error('Bio Not Found!');
  }

  return card; // Return the generated card element
}

// Function to get the height of an HTML element
// Intended use is to get the height of a card
export function getHeight(htmlElement) {
  const element = htmlElement;
  element.style.visibility = 'hidden'; // Hide the element
  document.body.appendChild(element); // Add the element to the document body
  const height = element.offsetHeight + 0; // Get the height of the element
  document.body.removeChild(element); // Remove the element from the document body
  element.style.visibility = 'visible'; // Set element visibility back to visible
  return height; // Return the calculated height
}

// Function to get the width of an HTML element
// Intended use is to get the width of a card
export function getWidth(htmlElement) {
  const element = htmlElement;
  element.style.visibility = 'hidden'; // Hide the element
  document.body.appendChild(element); // Add the element to the document body
  const width = element.offsetWidth + 0; // Get the width of the element
  document.body.removeChild(element); // Remove the element from the document body
  element.style.visibility = 'visible'; // Set element visibility back to visible
  return width; // Return the calculated width
}
