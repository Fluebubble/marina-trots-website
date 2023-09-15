import { lightbox } from './certificates-gallery';

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
  {
    name: 'Курс MBSR 2020',
    src: './img/cert/MBSR.png',
  },
  {
    name: 'Пропедевтика психиатрии 2020',
    src: './img/cert/proped-therapy.webp',
  },
  {
    name: 'Сексология и сексопаталогия 1 2019',
    src: './img/cert/sexology-sexopathology.webp',
  },
  {
    name: 'Сексология и сексопаталогия 2 2019',
    src: './img/cert/sexology-sexopathology2.webp',
  },
  {
    name: 'Схема-терапия 2017',
    src: './img/cert/schema.jpg',
  },
  {
    name: 'Системно-феноменологическая психотерапия 2016',
    src: './img/cert/sys-fem-psy.webp',
  },
  {
    name: 'Когнитивно-поведенческая терапия 2016',
    src: './img/cert/cognipov.webp',
  },
  {
    name: 'Бодинамическая терапия 2013',
    src: './img/cert/bodynamic-therapy.webp',
  },
  {
    name: 'Холотропное дыхание 2012',
    src: './img/cert/holdih.webp',
  },
  {
    name: 'Процессуальный интенсив по отношениям 2011',
    src: './img/cert/procterap2.webp',
  },
  {
    name: 'Основы процессуальной терапии 2010',
    src: './img/cert/osn-proc-therapy.webp',
  },
  {
    name: 'Диплом психолога 2010',
    src: './img/cert/psy-diploma.webp',
  },
  {
    name: 'Холодинамика 2007',
    src: './img/cert/holdnam.webp',
  },
  {
    name: 'Семейная психология и психотерапия 2007',
    src: './img/cert/sempsih.jpg',
  },
];
const showMoreBtn = document.querySelector('.certificates-gallery__button');
let isMoreDocsShowed = false;

const gallery = document.querySelector('.certificates__gallery');
const addedDocs = [];

showMoreBtn.addEventListener('click', () => {
  if (!isMoreDocsShowed) {
    // console.log(gallery);
    const markup = [];
    for (cert of certificates) {
      let item = document.createElement('a');
      addedDocs.push(item);
      item.classList.add('certificates__item-link');
      item.href = cert.src;

      item.innerHTML = `<div class="certificates__item-image-container"><img
            src="${cert.src}"
            alt="${cert.name}"
            class="certificates__item-image"
          /></div>
          <p class="certificates__item-name">
            ${cert.name}
          </p>`;
      markup.push(item);
      // console.log(item);
    }
    gallery.append(...markup);
    isMoreDocsShowed = true;
    showMoreBtn.textContent = 'Показать меньше';
    lightbox.refresh();
    // console.log(addedDocs);
  } else {
    addedDocs.forEach(doc => {
      doc.remove();
    });
    showMoreBtn.textContent = 'Показать все документы';
    isMoreDocsShowed = false;
  }
});
