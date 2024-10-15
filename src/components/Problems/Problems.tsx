import React from 'react';
import { BulletList } from './BulletList/BulletList';
import { Title } from '../Title/Title';

export const Problems = () => {
  return (
    <section className="section section__problems">
      <Title text="С какими проблемами я работаю" />
      <BulletList />
    </section>
  );
};
