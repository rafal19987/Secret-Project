import React from 'react';
import Counter from '../../components/Counter/Counter';

import './StartOverAgain.scss';

const StartOverAgain = () => {
  return (
    <>
      <Counter value={`00/20`} />
      <h1 className="h1">The pool of questions and answers has come to an end</h1>
      <p className="p">The pool of questions and answers has come to an end</p>
    </>
  );
};

export default StartOverAgain;
