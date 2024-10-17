import React from 'react';
import { Item } from './Item/Item';

export const List = () => {
  return (
    <div className="certificates__gallery">
      <Item
        image="./img/cert/healing-trauma.jpg"
        thumb="./img/cert/thumbs/healing-trauma-thumb.jpg"
        alt="Сертификат Healing Trauma 2022"
        name="Healing Trauma 2022"
      />
      <a
        href="./img/cert/healing-trauma.jpg"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/healing-trauma-thumb.jpg"
            alt="Сертификат Healing Trauma 2022"
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">Healing Trauma 2022</p>
      </a>
      <a
        href="./img/cert/EABCT_Accreditation.webp"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/EABCT_Accreditation-thumb.jpg"
            alt="Сертификат MBSR 2020"
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">EABCT 2021</p>
      </a>
      <a
        href="./img/cert/integration-mindfulness.webp"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/integration-mindfulness-thumb.jpg"
            alt="Сертификат "
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">Интеграция майндфулнес 2021</p>
      </a>
      <a
        href="./img/cert/cognitive-pov-therapy.jpg"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/cognitive-pov-therapy-thumb.jpg"
            alt="Сертификат Когнитивно-поведенческая терапия 2021"
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">
          Когнитивно-поведенческая терапия 2021
        </p>
      </a>
      <a
        href="./img/cert/MBSR.png"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/MBSR-thumb.jpg"
            alt="Курс MBSR 2020"
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">Курс MBSR 2020</p>
      </a>
      <a
        href="./img/cert/proped-therapy.webp"
        className="certificates__item-link"
      >
        <div className="certificates__item-image-container">
          <img
            src="./img/cert/thumbs/proped-therapy-thumb.jpg"
            alt="Сертификат Пропедевтика психиатрии 2020"
            className="certificates__item-image"
          />
        </div>
        <p className="certificates__item-name">Пропедевтика психиатрии 2020</p>
      </a>
    </div>
  );
};
