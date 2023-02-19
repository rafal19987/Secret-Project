import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<QuestionsPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
