import React from 'react';
import './Flights.css';
import { useNavigate } from 'react-router-dom';

const Flights = () => {
  const navigate = useNavigate();

  const flights = [
    { id: 1, route: 'Asgard to Midgard', timing: '10:00 AM', price: '$150', departure: '9:45 AM', god: 'Odin' },
    { id: 2, route: 'Olympus to Atlantis', timing: '12:30 PM', price: '$200', departure: '12:00 PM', god: 'Poseidon' },
    { id: 3, route: 'Valhalla to Elysium', timing: '3:00 PM', price: '$250', departure: '2:30 PM', god: 'Hades' },
    { id: 4, route: 'Helheim to Tartarus', timing: '6:00 PM', price: '$300', departure: '5:30 PM', god: 'Hel' },
    { id: 5, route: 'Jotunheim to Sparta', timing: '9:00 AM', price: '$180', departure: '8:45 AM', god: 'Ares' },
  ];

  const handleBookNow = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="flights">
      <header className="flights-header">
        <h1>🌌 Divine Flights</h1>
        <p>Embark on epic journeys across realms with the gods. Choose your adventure!</p>
      </header>
      <div className="flight-list">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <div className="flight-card-content">
              <h3 className="flight-route">{flight.route}</h3>
              <p><strong>Timings:</strong> {flight.timing}</p>
              <p><strong>Departure:</strong> {flight.departure}</p>
              <p><strong>Price:</strong> {flight.price}</p>
              <p><strong>God:</strong> {flight.god}</p>
            </div>
            <button
              className="book-now-btn"
              onClick={() => handleBookNow(flight.id)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
