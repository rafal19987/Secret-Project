import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './QuestionsPage.scss';
import QuestionBody from '../../components/QuestionBody/QuestionBody';
import { questionsWithAnswers } from '../../data/questionsWithAnswers';
import StartOverAgain from '../StartOverAgain/StartOverAgain';

const QuestionsPage = () => {
  let [questionIndex, setQuestionIndex] = useState(0);
  const nextQuestionHandle = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="border">
      <div className="iphoneTriger"></div>
      <div className="iphoneRact"></div>
      <div className="questionPage">
        {questionIndex < questionsWithAnswers.length ? (
          <>
            <QuestionBody index={questionIndex} />
            <Button onClick={() => nextQuestionHandle()} btnText={'Next Question'} />
          </>
        ) : (
          <>
            <StartOverAgain index={questionIndex} />
            <Button onClick={() => setQuestionIndex(0)} btnText={'Start again'} />
          </>
        )}
      </div>
      <div className="iphoneButton"></div>
    </div>
  );
};

export default QuestionsPage;
