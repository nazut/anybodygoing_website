import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import EventChat from './pages/EventChat';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/event/:id/chat" element={<EventChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;