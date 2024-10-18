// Функция для обработки изменения ширины окна
// function handleWindowResize() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) {
//       // Выполнить код для экранов шириной меньше 768px
//       console.log("Экран меньше 768px" + window.innerWidth);
//   } else if (screenWidth >= 768 && screenWidth < 1200) {
//       // Выполнить код для экранов шириной от 768px до 1199px
//       console.log("Экран от 768px до 1199px" + window.innerWidth);
//   } else {
//       // Выполнить код для экранов шириной 1200px и больше
//       console.log("Экран 1200px и больше" + window.innerWidth);
//   }
// }

// Вызвать функцию при загрузке страницы и при изменении размера окна
// window.addEventListener('load', handleWindowResize);
// window.addEventListener('resize', handleWindowResize);

if (window.innerWidth >= 1200) {
  const directionsList = document.querySelector('.psy-directions__list');
  const directionsListElements = document.querySelectorAll(
    '.psy-direction__item'
  );
  const newDirectionsListElements = [];
  console.log(directionsListElements);

  const secondDirectionsList = document.createElement('dl');
  secondDirectionsList.classList.add('psy-directions__list');

  for (let i = 1; i < directionsListElements.length; i += 2) {
    newDirectionsListElements.push(directionsListElements[i]);
  }
  console.log(newDirectionsListElements);

  secondDirectionsList.append(...newDirectionsListElements);
  directionsList.after(secondDirectionsList);
  console.log(secondDirectionsList);
}
