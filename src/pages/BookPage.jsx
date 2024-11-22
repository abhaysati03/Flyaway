import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css'; // Styling in CSS file

// Flight data (simulate fetched data)
const flights = [
  { 
    id: 1, 
    route: 'Asgard to Midgard', 
    timing: ['10:00 AM', '2:00 PM', '6:00 PM'], 
    price: '$150', 
    god: 'Odin', 
    mythology: 'Norse', 
    stations: ['Asgard (Departure)', 'Midgard (Arrival)'] 
  },
  { 
    id: 2, 
    route: 'Olympus to Atlantis', 
    timing: ['12:30 PM', '5:00 PM', '8:30 PM'], 
    price: '$200', 
    god: 'Poseidon', 
    mythology: 'Greek', 
    stations: ['Olympus (Departure)', 'Atlantis (Arrival)'] 
  },
];

const BookPage = () => {
  const { id } = useParams();
  const flight = flights.find((flight) => flight.id === parseInt(id));
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  const handleBooking = () => {
    setShowToast(true); // Show the toast when the button is clicked
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div className="book-page">
      {flight ? (
        <div className="flight-details">
          <h1 className="title">🚀 Flight Booking: {flight.route}</h1>
          <div className="card">
            <div className="card-content">
              <p><strong>Route:</strong> {flight.route}</p>
              <p><strong>Price:</strong> <span className="price">{flight.price}</span></p>
              <p><strong>Ruled by:</strong> {flight.god}</p>
              <p><strong>Mythology:</strong> {flight.mythology}</p>
              <p><strong>Stations:</strong> {flight.stations.join(' → ')}</p>
              <p><strong>Available Timings:</strong></p>
              <ul className="timings">
                {flight.timing.map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
            <button className="book-btn" onClick={handleBooking}>
              ✅ Book Now
            </button>
          </div>
        </div>
      ) : (
        <p className="not-found">❌ Flight details not found. Please go back and select a valid flight.</p>
      )}

      {/* Toast message with tick animation */}
      {showToast && (
        <div className="toast-message show">
          <div className="tick-animation">✔️</div>
          ⚡ Booking Confirmed! ⚡
        </div>
      )}
    </div>
  );
};

export default BookPage;
