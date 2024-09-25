import React from 'react';
import EventCard from './EventCard'; 

const EventSection = ({ sectionTitle, events, onWatchNow }) => {
  const scrollLeft = () => {
    const container = document.getElementById(`section-${sectionTitle}`);
    container.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const container = document.getElementById(`section-${sectionTitle}`);
    container.scrollLeft += 300;
  };

  return (
    <div className="event-section">
      <h2 className="section-title">{sectionTitle}</h2>
      
      <div className="carousel-controls">
        <button onClick={scrollLeft} className="scroll-button">{'<'}</button>

        <div id={`section-${sectionTitle}`} className="events-container">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onWatchNow={onWatchNow} />
          ))}
        </div>

        <button onClick={scrollRight} className="scroll-button">{'>'}</button>
      </div>
    </div>
  );
};

export default EventSection;
