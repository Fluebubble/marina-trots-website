import styles from './Header.module.scss';
import { ContactsBar } from './ContactsBar/ContactsBar';
import { Hero } from './Hero/Hero';

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContactsBar />
      <Hero />
    </div>
  );
};
