import React from 'react';
import styles from './Header.module.scss';
import { ContactsBar } from './ContactsBar/ContactsBar';
import { Hero } from './Hero/Hero';
import cn from 'classnames';

export const Header = () => {
  return (
    <section className={cn(styles.header, 'section')}>
      <ContactsBar />
      <Hero />
    </section>
  );
};
