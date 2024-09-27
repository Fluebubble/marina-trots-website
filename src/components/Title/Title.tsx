import React from 'react';

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="title">
      <h2 className="title__text">{text}</h2>
    </div>
  );
};
