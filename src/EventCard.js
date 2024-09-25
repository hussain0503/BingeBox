import React from 'react';

const EventCard = ({ event, onWatchNow }) => {
  return (
    <div className="event-card" onClick={() => onWatchNow(event)}>
      <div className="event-card-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-date">{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
