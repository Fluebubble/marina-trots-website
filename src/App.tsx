// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.scss';
// import './css/index.scss';
import React from 'react';
import './styles/index.scss';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Story } from './components/Story/Story';
import { Problems } from './components/Problems/Problems';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Story />
        <Problems />
      </Container>
    </main>
  );
}

export default App;
