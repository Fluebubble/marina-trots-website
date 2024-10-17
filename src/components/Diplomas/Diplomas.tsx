import React from 'react';
import { Title } from '../Title/Title';
import { List } from './List/List';

export const Diplomas = () => {
  return (
    <section className="section certificates">
      <div className="title">
        <h2 className="title__text">Дипломы и сертификаты</h2>
      </div>
      <Title text="Дипломы и сертификаты" />
      <List />
      <button
        type="button"
        className="certificates-gallery__button"
      >
        Показать все документы
      </button>
    </section>
  );
};
