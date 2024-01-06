import { createCard, getHeight, getWidth } from './generate-card';

/* Factory function.
Parameters are an array of women in tech objects, and a container to display them in.
Provides methods to control display of information within women in tech objects
*/
export default function cardDisplayHandler(WITObjArr, container) {
  const cardArr = [];// array of women in tech card elements
  const posArr = [];// array of positions of women in tech cards

  // create cards from each women in tech object and add it to the array of cards
  for (let i = 0; i < WITObjArr.length; i += 1) {
    cardArr.push(createCard(WITObjArr[i]));
  }

  // checks if a position of a card is valid
  function checkPos(x, y, cardWidth, cardHeight) {
    let valid = true;
    // checks if card overlaps with another card
    for (let i = 0; i < posArr.length; i += 1) {
      if (Math.abs(posArr[i].xPos - x) < cardArr[i].offsetWidth + 40
      && Math.abs(posArr[i].yPos - y) < cardArr[i].offsetHeight + 40) {
        valid = false;
      }
    }
    // checks if card goes off the screen
    if (cardWidth + x > container.offsetWidth) {
      valid = false;
    }
    if (cardHeight + y > container.offsetHeight) {
      valid = false;
    }
    return valid;
  }

  // Generates a random position based on the width, height, and margins of the provided container.
  // Returns object containing x and y coordinates
  function generateRandomPosition(card) {
    let x; let y;
    const containerComputedStyles = window.getComputedStyle(container);
    let validPosition;
    while (!validPosition) {
      // generate x and y coordinates randomly until a valid position is found
      x = container.offsetWidth * Math.random() + parseInt(containerComputedStyles.getPropertyValue('margin-left'), 10);
      y = container.offsetHeight * Math.random() + parseInt(containerComputedStyles.getPropertyValue('margin-top'), 10);
      // checks if the generated position is valid
      validPosition = checkPos(x, y, getWidth(card), getHeight(card));
    }
    return { xPos: x, yPos: y };
  }

  // creates and generates lines between cards based off of positions in posArr
  function generateLines() {
    for (let i = 0; i < posArr.length - 1; i += 1) {
      // create line div
      const line = document.createElement('div');
      line.classList.add('line');
      // define start and end positions
      const startPosX = posArr[i].xPos;
      const startPosY = posArr[i].yPos;
      const endPosX = posArr[i + 1].xPos;
      const endPosY = posArr[i + 1].yPos;
      // find angle between start and end positions using inverse tangent
      const angle = Math.atan2((endPosY - startPosY), (endPosX - startPosX)) * (180 / Math.PI);
      // find length of line using Pythagorean Theorum
      const length = Math.sqrt(Math.abs(startPosX - endPosX) ** 2
      + Math.abs(startPosY - endPosY) ** 2);
      // assign line starting position position
      line.style.position = 'absolute';
      line.style.top = `${startPosY + 100}px`;
      line.style.left = `${startPosX + 100}px`;
      // assign line length
      line.style.width = `${length}px`;
      //   assign line angle
      line.style.transform = `rotate(${angle}deg)`;
      container.appendChild(line);// add line to document
    }
  }

  // function that appends women in tech cards to given container
  function positionElements() {
    for (let i = 0; i < cardArr.length; i += 1) {
      const position = generateRandomPosition(cardArr[i]);
      posArr.push(position);
      cardArr[i].style.position = 'absolute';
      const x = `${position.xPos}px`;
      cardArr[i].style.left = x;
      cardArr[i].style.top = `${position.yPos}px`;
      container.appendChild(cardArr[i]);
    }
  }
  return { positionElements, generateLines };
}
