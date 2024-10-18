import React from 'react';
import { Title } from '../Title/Title';
import { List } from './List/List';

export const Diplomas = () => {
  return (
    <section className="section">
      <Title text="Дипломы и сертификаты" />
      <List />
      {/* <button
        type="button"
        className="certificates-gallery__button"
      >
        Показать все документы
      </button> */}
    </section>
  );
};
