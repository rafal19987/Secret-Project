import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeWrapper">
      <h1>This is JS interview questions App</h1>
      <p>You can improve your knowledge</p>
      <p>
        Try memorize them all to better prepare for the interview. Pracrice and you will became
        GIGACHAD
      </p>
      <p>For start click the button below</p>
      <Link to="/questions">
        <Button btnText={'Start'} />
      </Link>
    </div>
  );
};

export default Home;
