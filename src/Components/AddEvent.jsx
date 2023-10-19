import React, { useState } from 'react';
import "./css/AddEvent.css"



function AddEventForm({ onAddEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventStatus, setEventStatus] = useState('Created');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      name: eventName,
      description: eventDescription,
      startDate: eventStartDate,
      endDate: eventEndDate,
      status: eventStatus,
      Location : eventLocation
    };
    onAddEvent(newEvent);
    setEventName('');
    setEventDescription('');
    setEventStartDate(new Date());
    setEventEndDate(new Date());
    setEventStatus('Created');
    setEventLocation('');
  };

  return (
    <div className='form-container'>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />


        <input
          type="datetime-local"
          value={eventStartDate.toISOString().slice(0, -1)} // Convert to ISO string format
          onChange={(e) => setEventStartDate(new Date(e.target.value))}
        />
        <input
          type="datetime-local"
          value={eventEndDate.toISOString().slice(0, -1)}
          onChange={(e) => setEventEndDate(new Date(e.target.value))}
        />
         <input
          type="text"
          value={eventLocation}
          placeholder='location'
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <select value={eventStatus} onChange={(e) => setEventStatus(e.target.value)}>
          <option value="Created">Created</option>
          <option value="Open">Open</option>
          <option value="In-progress">In-progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventForm;

