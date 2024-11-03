// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.scss';
// import './css/index.scss';
import React from "react";
import "./styles/index.scss";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { Story } from "./components/Story/Story";
import { Problems } from "./components/Problems/Problems";
import { Diplomas } from "./components/Diplomas/Diplomas";
import { Experience } from "./components/Experience/Experience";
import { PsyDirections } from "./components/PsyDirections/PsyDirections";
import { QuestionsAndAnswers } from "./components/QuestionsAndAnswers/QuestionsAndAnswers";
import { ContactForm } from "./components/ContactForm/ContactForm";

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Story />
        <Problems />
        <Diplomas />
        <Experience />
        <PsyDirections />
        <QuestionsAndAnswers />
        <ContactForm />
      </Container>
    </main>
  );
}

export default App;
