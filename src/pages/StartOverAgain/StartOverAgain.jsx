import React from 'react';
import Counter from '../../components/Counter/Counter';

import './StartOverAgain.scss';

const StartOverAgain = () => {
  return (
    <>
      <Counter value={`00/20`} />
      <h1 className="h1">Pull of questions and answers is over</h1>
      <p className="p">If you want to start over again click button below</p>
    </>
  );
};

export default StartOverAgain;
