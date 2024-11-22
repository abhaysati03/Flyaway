import React from 'react';

const FlightCard = ({ from, to, price, timing, route }) => {
  return (
    <div className="flight-card">
      <h2>From: {from}</h2>
      <h2>To: {to}</h2>
      <p>Price: ${price}</p>
      <p>Timing: {timing}</p>
      <p>Route: {route}</p>
    </div>
  );
};

export default FlightCard;
