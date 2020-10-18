import React from 'react';

// import Trip from '../components/Trip.jsx';

// import OwnerCard from '../components/OwnerCard.jsx';
import { Link } from 'react-router-dom';

import './Homepage.scss';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="first-container">
      {/* <img src={require('../assets/Martin_small.jpeg')} alt="Martin"></img> */}
      <img className="photo" src="https://media-exp1.licdn.com/dms/image/C5603AQFf9hnTY-75yA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=SaTj6K5BB0R4gu1xWa0l4POAP0cWrz3ap7TdJ3sE8pM"></img>
        <h1>
          Hi, I'm <h1 className="myName">Martin</h1>
        </h1>
        <h1>Software Engineer</h1>
        <Link className="option" to="/projects">
          <a href="#" className="btn btn--white btn--animated">
            Portfolio
          </a>
        </Link>
      </div>
      <div className="second-container">
        <h2>I'm also an</h2>
        <h1>Exercise Physiologist</h1>
        <h1>aka Trainer</h1>
        {/* <div className="trip-list">
          {trips.map(
            ({
              title,
              imageUrl,
              tripId,
              detailsUrl,
              destination,
              price,
              date,
            }) => (
              <Trip
                key={`home-trip${tripId}`}
                title={title}
                imageUrl={imageUrl}
                destination={destination}
                price={price}
                detailsUrl={detailsUrl}
                date={date}
              />
            )
          )}
        </div> */}
        <Link className="option" to="/clients">
          <a href="/clients" className="btn btn--white btn--animated">
            Client Results
          </a>
        </Link>
      </div>
      <div className="third-container">
        <h2>I'm also a</h2>
        <h1>youTuber</h1>
        {/* <div className="home-owners-list">
          {owners.map(
            ({ firstName, imageUrl, id, detailsUrl, age, intro, dog }) => (
              <OwnerCard
                className="owner-card-home"
                key={id}
                firstName={firstName}
                age={age}
                intro={intro}
                imageUrl={imageUrl}
                detailsUrl={detailsUrl}
                dog={dog}
              />
            )
          )}
        </div> */}
        <Link className="option" to="/videos">
          <a href="/videos" className="btn btn--white btn--animated">
            More videos
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
