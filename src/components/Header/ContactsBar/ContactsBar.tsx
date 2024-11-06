// import { Container } from '../../Container/Container';
import React from 'react'
import styles from './ContactsBar.module.scss';
import { MessangerList } from './MessangerList/MessangerList';
import { PhoneCTA } from './PhoneCTA/PhoneCTA';

export const ContactsBar = () => {
  return (
    <header className="header">
        <div className={styles['header__inner']}>
          <MessangerList />
          <PhoneCTA />
        </div>
      {/* </div> */}
    </header>
  );
};
