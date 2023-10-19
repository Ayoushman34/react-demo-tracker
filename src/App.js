import React from 'react';
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus,  faUserPlus }  from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './Components/EventList';
import AddEventForm from './Components/AddEvent';
import SearchEvent from './Components/Search';
import demoEventData from './data/DemoData';
import RegisterForm from './Components/ParticipantRegister';


function App() {

  const addevent = (data)=>{
    console.log(data)
  }

  const onSearchLocation= (location)=>{

  }

  const onSearchId = (ID)=>{
    
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> <FontAwesomeIcon icon={faHome}  /></Link>
            </li>
            <li>
              <Link to="/part-reg">  <FontAwesomeIcon icon={faUserPlus} className="icon"  /> Register  </Link>
            </li>
            {/* <li>
              <Link to="/add-event"><FontAwesomeIcon icon={faPlus} />Add event</Link>
            </li>
            <li>
              <Link to="/search-event"> <FontAwesomeIcon icon={faSearch} /></Link>
            </li>
            <li>
              <Link to="/event-list">  <FontAwesomeIcon icon={faList} /></Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEventForm onAddEvent={addevent} />} />
          <Route path="/search-event" element={<SearchEvent />} />
          <Route path="/event-list" element={<EventList events={demoEventData} />} />
          <Route path="/part-reg" element={<RegisterForm  />} />
        </Routes>
      </div>
    </Router>
  );
}

 // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Discover Exciting Events</h1>
      <p className="home-description">
        Explore a wide range of events, workshops, conferences, and more in one place.
      </p>
      <div className="home-buttons">
        <Link to="/event-list" className="home-button">
          Browse Events
        </Link>
        <Link to="/add-event" className="home-button secondary">
          Add Your Event
        </Link>
        <Link to="/search-event" className="home-button ">
          Search
        </Link>
      </div>
    </div>
  );
}


export default App;

