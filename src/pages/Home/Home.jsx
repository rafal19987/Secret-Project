import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeWrapper">
      <h1>This is JS interview questions App</h1>
      <p>You can improve your knowleage trying to qnsware for all questions.</p>
      <p>
        Don`t warry if you will don`t now answers for all questions. This app is for help you to
        train and makes you gigaChad
      </p>
      <p>For start click the button below</p>
      <Link to="/questions">
        <Button btnText={'Start'} />
      </Link>
    </div>
  );
};

export default Home;
