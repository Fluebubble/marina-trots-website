const buttons = document.querySelectorAll('.psy-direction__item-button');
const descriptions = document.querySelectorAll('[data-type=description]');
buttons[0].addEventListener('click', () => {
  // console.log('clicked');
});
// console.log(buttons);
// console.log(descriptions);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (descriptions[i].classList.contains('is-hidden')) {
      console.log(`contains isHidden`);
      descriptions[i].classList.replace(
        'is-hidden',
        'psy-direction-description'
      );
      descriptions[i].classList.add('position-relative');
    } else {
      console.log(`doesn't contain isHidden`);
      descriptions[i].classList.replace(
        'psy-direction-description',
        'is-hidden'
      );
      descriptions[i].classList.remove('position-relative');
    }
  });
}

// buttons.forEach(button => {
//   button.addEventListener('click', function () {
//     // console.log('lll');
//     const targetId = button.getAttribute('data-target');
//     console.log(targetId + 'cheza');
//     const description = document.getAttribute(targetId);
//     description.classList.toggle('is-hidden');
//     description.classList.toggle('psy-direction-description');
//   });
// });
// const

// console.log(buttons);
