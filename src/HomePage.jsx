import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.scss';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="first-container">
        <div className="left">
          <img className="photo" src="https://media-exp1.licdn.com/dms/image/C5603AQFf9hnTY-75yA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=SaTj6K5BB0R4gu1xWa0l4POAP0cWrz3ap7TdJ3sE8pM"></img>
          <h2>
            Hi, I'm <h1 className="myName">Martin</h1>
          </h2>
          <h1>Software Engineer</h1>
          <Link className="option" to="/projects">
            <a href="#" className="btn btn--white btn--animated">
              Portfolio
            </a>
          </Link>
        </div>
        <div className="right">

        </div>
      </div>
      <div className="second-container">
        <h2>I'm also a</h2>
        <h1>Freelance Trainer</h1>
        <Link className="option" to="/clients">
          <a href="/clients" className="btn btn--white btn--animated">
            Client Results
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
