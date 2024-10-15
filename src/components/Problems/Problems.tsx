import React from 'react';
import { BulletList } from './BulletList/BulletList';

export const Problems = () => {
  return (
    <section className="section section__problems">
      <div className="container">
        <div className="title">
          <h2 className="title__text">С какими проблемами я работаю</h2>
        </div>
        <BulletList />
      </div>
    </section>
  );
};
