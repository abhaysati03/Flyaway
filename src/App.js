import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';
import About from './pages/About';
import Contact from './pages/Contact';
import BookPage from './pages/BookPage';  // Adjust the path to match your file structure



const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Flights />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" component={BookPage} /> {/* Add a dynamic route for each flight */}
          <Route path="/" element={<Flights />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/book/:id" element={<BookPage />} /> {/* Use BookPage here */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
