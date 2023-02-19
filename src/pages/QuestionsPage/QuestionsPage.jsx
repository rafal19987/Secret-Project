import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './QuestionsPage.scss';
import QuestionBody from '../../components/QuestionBody/QuestionBody';
import { questionsWithAnswers } from '../../data/questionsWithAnswers';

const QuestionsPage = () => {
  let [questionIndex, setQuestionIndex] = useState(0);
  const nextQuestionHandle = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="questionPage">
      {questionIndex < questionsWithAnswers.length - 1 ? (
        <QuestionBody index={questionIndex} />
      ) : (
        <h1>Brak</h1>
      )}

      <Button onClick={() => nextQuestionHandle()} btnText={'Next Question'} />
    </div>
  );
};

export default QuestionsPage;
