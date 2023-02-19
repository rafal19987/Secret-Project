import React from 'react';
import './QuestionBody.scss';
import PropTypes from 'prop-types';
import Counter from '../../components/Counter/Counter';
import { questionsWithAnswers } from '../../data/questionsWithAnswers';

const QuestionBody = ({ index }) => {
  console.log(questionsWithAnswers[index].question);
  return (
    <>
      <Counter value={`${index + 1}/${questionsWithAnswers.length}`} />
      <h1 className={'question'}>{questionsWithAnswers[index].question}</h1>
      <p className={'answer'}>{questionsWithAnswers[index].answer}</p>
    </>
  );
};

QuestionBody.propTypes = {
  index: PropTypes.number
};

export default QuestionBody;
