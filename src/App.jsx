// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import Detail from './pages/bus/Detail';
import Checkout from './pages/checkout/Checkout';
import About from './pages/about/About';
import BookingSuccess from './pages/BookingSuccess'
function App() {
  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/about" element={<About />} />
            <Route path="/bus/bus-details" element={<Detail />} />
            <Route path="/bus/bus-details/bus/bus-details/checkout" element={<Checkout />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;