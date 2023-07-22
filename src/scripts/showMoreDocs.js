const certificates = [
//   {
//     name: 'Healing Trauma 2022',
//     src: './img/cert/healing-trauma.jpg',
//   },
//   {
//     name: 'Интеграция майндфулнес 2021',
//     src: './img/cert/integration-mindfulness.webp',
//   },
//   {
//     name: 'Когнитивно-поведенческая терапия 2021',
//     src: './img/cert/cognitive-pov-therapy.jpg',
//   },
//   {
//     name: 'Курс MBSR 2020',
//     src: './img/cert/MBSR.png',
//   },
  {
    name: 'Пропедевтика психиатрии 2020',
    src: './img/cert/proped-therapy.webp',
  },
  {
    name: 'Сексология и сексопаталогия 2 2019',
    src: './img/cert/sexology-sexopathology2.webp',
  },
  {
    name: 'Системно-феноменологическая психотерапия 2016',
    src: './img/cert/sys-fem-psy.webp',
  },
  {
    name: 'Когнитивно-поведенческая терапия 2016',
    src: './img/cert/cognipov.webp',
  },
];

const showMoreBtn = document.querySelector(
  '.certificates-gallery__loadMore-button'
);

const gallery = document.querySelector('.certificates-gallery');
showMoreBtn.addEventListener('click', () => {
  console.log(gallery);
  const markup = [];
  //   gallery.insertAdjacentElement('beforeend', '<p>kek</p>');
  for (cert of certificates) {
    let item = document.createElement('a');
    item.classList.add('certificates-list__item-link');
    item.href = cert.src;

    item.innerHTML = `<img
          src="${cert.src}"
          alt="${cert.name}"
          class="certificates-list__image"
        />
        <p class="certificate-name">
          ${cert.name}
        </p>`;
    markup.push(item);
    console.log(item);
    // console.log(markup);
  }
  gallery.append(...markup);
});
