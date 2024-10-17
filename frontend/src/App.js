import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Layouts/Header';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main className='app-main'>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;