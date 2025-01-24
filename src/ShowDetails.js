import React, { useState } from 'react';

const ShowDetails = ({ event, onGoBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNowClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="show-details">
      {!isPlaying ? (
        <>
          <img src={event.image} alt={event.title} className="show-details-image" />
          <div className="show-details-content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Duration:</strong> {event.duration}</p>
            <p><strong>Genre:</strong> {event.genre}</p>
            <p><strong>Cast:</strong> {event.cast.join(', ')}</p>
            <button className="watch-button" onClick={handleWatchNowClick}>
              Watch Now
            </button>
            <button className="go-back-button" onClick={onGoBack}>
              Go Back
            </button>
          </div>
        </>
      ) : (
        <div className="video-container">
    <video controls autoPlay className="movie-video">
      <source src={event.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button className="go-back-button" onClick={onGoBack}>
      Go Back
    </button>
  </div>
)}
    </div>
  );
};

export default ShowDetails;



