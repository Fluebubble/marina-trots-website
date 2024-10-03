import React from 'react'
import { Form } from './Form/Form';
import styles from './Hero.module.scss';
import { MainTitle } from './MainTitle/MainTitle';
import { Photo } from './Photo/Photo';
import { Subtitle } from './Subtitle/Subtitle';
import { DeviceSizes } from '../../../types/deviceSizes';
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });
  console.log(isMobile);

  return (
    <div className={styles['hero']}>
      <div className={styles['content']}>
        <MainTitle />
        <Subtitle />
        <Photo
          image={'img/hero/main-photo.jpg'}
          alt="Марина Троц"
        />
        {!isMobile && <Form />}
      </div>
    </div>
  );
};
