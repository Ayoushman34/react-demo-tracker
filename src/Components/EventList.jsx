import React from 'react';
import './css/EventList.css'; // Import the CSS file for styling

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <h3>{event.name}</h3>
          <p className="date">
            {event.startDate.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
          </p>
          <p>{event.description}</p>
          <p>Status: {event.status}</p>
          
        </div>
      ))}
    </div>
  );
}

export default EventList;

