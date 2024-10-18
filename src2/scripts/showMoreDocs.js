import { lightbox } from './certificates-gallery';

const certificates = [
  {
    name: 'Сексология и сексопаталогия 1 2019',
    src: './img/cert/sexology-sexopathology.webp',
    thumb: './img/cert/thumbs/sexology-sexopathology-thumb.jpg',
  },
  {
    name: 'Сексология и сексопаталогия 2 2019',
    src: './img/cert/sexology-sexopathology2.webp',
    thumb: './img/cert/thumbs/sexology-sexopathology2-thumb.jpg',
  },
  {
    name: 'Схема-терапия 2017',
    src: './img/cert/schema.jpg',
    thumb: './img/cert/thumbs/schema-thumb.jpg',
  },
  {
    name: 'Системно-феноменологическая психотерапия 2016',
    src: './img/cert/sys-fem-psy.webp',
    thumb: './img/cert/thumbs/sys-fem-psy-thumb.jpg',
  },
  {
    name: 'Когнитивно-поведенческая терапия 2016',
    src: './img/cert/cognipov.webp',
    thumb: './img/cert/thumbs/cognipov-thumb.jpg',
  },
  {
    name: 'Бодинамическая терапия 2013',
    src: './img/cert/bodynamic-therapy.webp',
    thumb: './img/cert/thumbs/bodynamic-therapy-thumb.jpg',
  },
  {
    name: 'Холотропное дыхание 2012',
    src: './img/cert/holdih.webp',
    thumb: './img/cert/thumbs/holdih-thumb.jpg',
  },
  {
    name: 'Процессуальный интенсив по отношениям 2011',
    src: './img/cert/procterap2.webp',
    thumb: './img/cert/thumbs/procterap2-thumb.jpg',
  },
  {
    name: 'Основы процессуальной терапии 2010',
    src: './img/cert/osn-proc-therapy.webp',
    thumb: './img/cert/thumbs/osn-proc-therapy-thumb.jpg',
  },
  {
    name: 'Диплом психолога 2010',
    src: './img/cert/psy-diploma.webp',
    thumb: './img/cert/thumbs/psy-diploma-thumb.jpg',
  },
  {
    name: 'Холодинамика 2007',
    src: './img/cert/holdnam.webp',
    thumb: './img/cert/thumbs/holdnam-thumb.jpg',
  },
  {
    name: 'Семейная психология и психотерапия 2007',
    src: './img/cert/sempsih.jpg',
    thumb: './img/cert/thumbs/sempsih-thumb.jpg',
  },
];
const showMoreBtn = document.querySelector('.certificates-gallery__button');
let isMoreDocsShowed = false;

const gallery = document.querySelector('.certificates__gallery');
const addedDocs = [];

let currentScrollPosition = null;

showMoreBtn.addEventListener('click', () => {
  if (!isMoreDocsShowed) {
    currentScrollPosition = window.scrollY; // запоминаем позицию скролла по клику на "showmore"

    const markup = [];
    for (cert of certificates) {
      let item = document.createElement('a');
      addedDocs.push(item);
      item.classList.add('certificates__item-link');
      item.href = cert.src;

      item.innerHTML = `<div class="certificates__item-image-container"><img
            src="${cert.thumb}"
            alt="${cert.name}"
            class="certificates__item-image"
          /></div>
          <p class="certificates__item-name">
            ${cert.name}
          </p>`;
      markup.push(item);
    }
    gallery.append(...markup);
    isMoreDocsShowed = true;
    showMoreBtn.textContent = 'Показать меньше';
    lightbox.refresh();
  } else {
    addedDocs.forEach(doc => {
      doc.remove();
    });
    showMoreBtn.textContent = 'Показать все документы';
    isMoreDocsShowed = false;

    window.scrollTo(0, currentScrollPosition);
  }
});
