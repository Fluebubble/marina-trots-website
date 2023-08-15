// import { log } from "handlebars";

const directionsList = document.querySelector('.psy-directions-list');
const directionsListElements = document.querySelectorAll(
  '.psy-direction__item'
);
const newDirectionsListElements = [];
console.log(directionsListElements);

const secondDirectionsList = document.createElement('dl');

for (let i = 1; i < directionsListElements.length; i += 2) {
  newDirectionsListElements.push(directionsListElements[i]);
}
console.log(newDirectionsListElements);

secondDirectionsList.append(...newDirectionsListElements);
directionsList.after(secondDirectionsList);
console.log(secondDirectionsList);
